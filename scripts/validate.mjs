import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const required = [
  'src/pages/index.astro',
  'src/pages/photo-credits.astro',
  'src/pages/404.astro',
  'src/layouts/BaseLayout.astro',
  'public/robots.txt',
  'public/site.webmanifest',
  'wrangler.jsonc',
];
const imageNames = [
  'longtan-golden-hour',
  'longtan-night',
  'longtan-blue-hour',
  'longtan-boardwalk',
  'longtan-nantian-temple',
];
const allowedWebsiteHosts = new Set([
  'www.google.com',
  'www.googletagmanager.com',
  'commons.wikimedia.org',
  'creativecommons.org',
  'schema.org',
  'longtandachi.com',
  'maps.app.goo.gl',
  'travel.tycg.gov.tw',
  'www.longtan.tycg.gov.tw',
]);
const errors = [];

for (const file of required) {
  try {
    if (!(await stat(resolve(root, file))).isFile()) errors.push(`${file} 不是檔案`);
  } catch {
    errors.push(`缺少必要檔案：${file}`);
  }
}

for (const name of imageNames) {
  for (const suffix of ['-768.avif', '-1280.avif', '-768.webp', '-1280.webp', '.jpg']) {
    const file = `public/images/${name}${suffix}`;
    try {
      if (!(await stat(resolve(root, file))).isFile()) errors.push(`缺少圖片：${file}`);
    } catch {
      errors.push(`缺少圖片：${file}`);
    }
  }
}

async function collect(dir) {
  const files = [];
  for (const entry of await readdir(dir)) {
    if (['node_modules', 'dist', '.git'].includes(entry)) continue;
    const path = resolve(dir, entry);
    const info = await stat(path);
    if (info.isDirectory()) files.push(...await collect(path));
    else files.push(path);
  }
  return files;
}

const files = await collect(root);
const websiteFiles = files.filter((file) => {
  const rel = relative(root, file).replaceAll('\\', '/');
  return rel.startsWith('src/') || ['public/site.webmanifest', 'public/robots.txt'].includes(rel);
});
let websiteText = '';
for (const file of websiteFiles) {
  const text = await readFile(file, 'utf8');
  websiteText += `\n${relative(root, file)}\n${text}`;
  for (const match of text.matchAll(/https:\/\/[^\s'"`)]+/g)) {
    try {
      const host = new URL(match[0]).host;
      if (!allowedWebsiteHosts.has(host)) {
        errors.push(`未允許的網站外部主機 ${host}：${relative(root, file)}`);
      }
    } catch {
      errors.push(`無法解析網址：${match[0]}`);
    }
  }
}

for (const [label, token] of [
  ['GA4 代碼', 'G-HXM22WWPKP'],
  ['正式網域', 'https://longtandachi.com'],
  ['臺灣繁體語系', 'lang="zh-Hant-TW"'],
  ['照片授權頁', '/photo-credits/'],
]) {
  if (!websiteText.includes(token)) errors.push(`缺少${label}：${token}`);
}

for (const token of ['TODO', 'Lorem ipsum', 'example.com', 'hello@LongtanDachi.com']) {
  if (websiteText.includes(token)) errors.push(`網站仍含有占位內容：${token}`);
}

for (const char of ['这','为','与','从','还','开','关','时','门','问','应','会','过','体','网','点','线','龙','观','导','车','后','发','边','实','图','头','间','亲','风','阳','钟','饮','费','处','东']) {
  if (websiteText.includes(char)) errors.push(`網站偵測到疑似簡體字：${char}`);
}

if (errors.length) {
  console.error('驗證失敗：');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log(`驗證完成：${files.length} 個專案檔案，${imageNames.length} 組響應式實景照片；網站頁面未發現占位內容、疑似簡體字或未允許外鏈。`);
