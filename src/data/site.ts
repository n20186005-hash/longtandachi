export const site = {
  name: '龍潭大池旅遊指南',
  shortName: '龍潭大池',
  domain: 'LongtanDachi.com',
  url: 'https://longtandachi.com',
  description:
    '龍潭大池怎麼玩？整理桃園龍潭大池交通導航、停車資訊、觀光吊橋夜景、南天宮、環湖步道與親子遊玩建議，並提供最新設施公告及周邊景點路線，輕鬆安排龍潭半日遊。',
  address: '桃園市龍潭區上林里中豐路上林段115巷11號',
  coordinates: {
    latitude: 24.8635524,
    longitude: 121.2094495,
  },
  mapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=24.8635524%2C121.2094495&destination_place_id=ChIJGWs7Pvs8aDQR85-UeY7fPWE',
  mapsShareUrl: 'https://maps.app.goo.gl/vLGKPGjG9sV4kkpA6',
  govtTourismUrl: 'https://travel.tycg.gov.tw/zh-tw/travel/attraction/332',
  districtOfficeUrl: 'https://www.longtan.tycg.gov.tw/cp.aspx?n=6985',
  nearbyLandmarks: ['南天宮', '石門水庫'],
  gaId: 'G-HXM22WWPKP',
} as const;

export const rating = {
  value: 4.3,
  count: '10,617',
  countRaw: 10617,
  syncDate: '2026 年 10 月',
  sourceNote: '評分與評價數同步自 Google 地圖使用者評價，同步時間 2026 年 10 月；版權歸原作者與 Google 地圖所有。',
  reviewsUrl: 'https://maps.app.goo.gl/vLGKPGjG9sV4kkpA6',
} as const;

export const quickFacts = [
  { icon: 'ticket', label: '參觀費用', value: '戶外空間免費' },
  { icon: 'clock', label: '建議停留', value: '1.5–3 小時' },
  { icon: 'sunset', label: '推薦時段', value: '午後至夜間' },
  { icon: 'family', label: '適合族群', value: '親子・情侶・長輩' },
] as const;

export const highlights = [
  {
    number: '01',
    title: '觀光吊橋',
    subtitle: '在湖面之上，看見龍潭的日夜兩種表情',
    text: '吊橋採斜張與吊橋的複合式結構，以「龍」與「水」為設計意象。白天線條清爽，入夜後則與南天宮、九曲橋的照明互相呼應。',
    image: 'longtan-blue-hour',
    alt: '傍晚亮燈的龍潭觀光吊橋與南天宮',
    objectPosition: 'center center',
  },
  {
    number: '02',
    title: '南天宮',
    subtitle: '湖中信仰地標，也是龍潭最具辨識度的風景',
    text: '南天宮坐落於大池人工島上，傳統廟宇屋脊、湖面倒影與橋梁共同構成代表性的龍潭畫面。參觀時請放低音量，並保留信眾參拜空間。',
    image: 'longtan-nantian-temple',
    alt: '湖畔望向龍潭大池南天宮與倒影',
    objectPosition: 'center center',
  },
  {
    number: '03',
    title: '湖畔木棧步道',
    subtitle: '平緩易走，適合把旅行速度慢下來',
    text: '沿著水岸與木棧步道散步，可以從不同角度觀看湖面、樹影與橋景。路線整體平緩，適合輕鬆散步；夏季中午遮蔭有限，建議避開高溫時段。',
    image: 'longtan-boardwalk',
    alt: '龍潭大池湖面上的木棧步道與綠樹',
    objectPosition: 'center center',
  },
] as const;

export const routes = [
  {
    id: 'first',
    label: '第一次來',
    duration: '約 90 分鐘',
    badge: '最完整',
    description: '從水岸廣場出發，依序走過吊橋、南天宮與木棧步道，一次收進最具代表性的景色。',
    stops: ['水岸休憩廣場', '觀光吊橋', '南天宮', '忠義橋', '湖畔步道', '返回廣場'],
    notes: ['步調輕鬆', '適合推車', '拍照點集中'],
  },
  {
    id: 'sunset',
    label: '黃昏夜景',
    duration: '約 2 小時',
    badge: '最推薦',
    description: '午後抵達，先看日光下的湖景，再等待天色轉藍與橋燈亮起，適合約會與攝影。',
    stops: ['16:30 抵達', '南天宮湖景', '西岸看夕光', '吊橋亮燈', '拍攝水面倒影', '市區晚餐'],
    notes: ['景色層次最多', '建議帶防蚊', '腳架勿阻礙通行'],
  },
  {
    id: 'family',
    label: '親子半日',
    duration: '約 2–4 小時',
    badge: '有孩子',
    description: '以遊戲、散步與季節性水上體驗為主，保留休息時間，不把行程排得太滿。',
    stops: ['兒童遊戲空間', '季節戲水區', '湖畔散步', '天鵝船／水上體驗', '水岸廣場休息'],
    notes: ['戲水季節開放', '臨水處牽好幼童', '自備防曬與飲水'],
  },
] as const;

export const visitorProfiles = {
  couple: {
    label: '情侶約會',
    title: '把抵達時間排在傍晚',
    text: '先沿湖畔慢走，再從西岸等待日落與亮燈。晚餐可接龍潭市區，整體節奏最自然。',
    route: '黃昏夜景',
    tip: '藍調時刻通常只有短短一段，建議提早找好拍攝位置。',
  },
  family: {
    label: '親子同行',
    title: '早上或午後四點後較舒服',
    text: '把遊戲與季節性戲水放在前段，散步安排短一點，並預留孩子休息與補水時間。',
    route: '親子半日',
    tip: '水上活動與戲水設施可能因天候、維護或水質臨時調整。',
  },
  elder: {
    label: '長輩同行',
    title: '選擇平緩、少折返的路線',
    text: '從水岸廣場到吊橋與南天宮即可看見主要景色，不必勉強完成整圈，沿途多安排坐下休息。',
    route: '第一次來',
    tip: '雨後橋面與木棧道可能較滑，穿著止滑鞋較安心。',
  },
  photo: {
    label: '攝影散步',
    title: '同時準備廣角與中焦段',
    text: '西岸適合收進南天宮與吊橋全景，湖面平靜時可拍倒影；夜間注意保留高光細節。',
    route: '黃昏夜景',
    tip: '不要在橋面中央長時間架設腳架，以免影響其他遊客。',
  },
} as const;

export const faqs = [
  {
    question: '龍潭大池需要門票嗎？',
    answer: '湖畔公園、步道與吊橋等戶外公共空間免費參觀。天鵝船、SUP或其他營運型水上體驗可能另行收費，並依現場公告為準。',
  },
  {
    question: '如何導航到龍潭大池？',
    answer: '可直接以地址「桃園市龍潭區中豐路上林段115巷11號」設定導航，或以座標 24.8636, 121.2094 開啟 Google 地圖；本站交通區塊亦提供一鍵導航連結。大眾運輸可於龍潭市區轉乘公車，在「龍潭大池」或鄰近站點下車。',
  },
  {
    question: '龍潭大池附近有停車場嗎？',
    answer: '周邊有公有、民營停車空間與合法路邊停車格可供尋找；端午龍舟賽、煙火或市集期間車位會明顯更緊張。本站不固定推薦單一停車場與收費標準，出發當日請以現場公告與交通指示為準。',
  },
  {
    question: '龍潭大池適合安排多久？',
    answer: '只走主要景點約需1至1.5小時；若想拍黃昏夜景、帶孩子遊玩或參加水上活動，建議預留2至4小時。',
  },
  {
    question: '什麼時間去最好？',
    answer: '最推薦下午四點後抵達，可以依序看到白天湖景、夕光與夜間燈景。夏季正午較炎熱，遮蔭不足的路段體感會更明顯。',
  },
  {
    question: '環湖步道適合推嬰兒車或長輩嗎？',
    answer: '主要水岸路線整體平緩，吊橋入口也經過友善坡度改善，適合輕鬆步行與推車。但部分臨水、木棧或人潮密集路段仍需放慢速度。',
  },
  {
    question: '吊橋每天都會亮燈嗎？',
    answer: '吊橋設有夜間照明，但實際亮燈方式可能因季節、節慶、天候或維護而調整。本站不固定刊登單一亮燈時刻，以免資訊過期。',
  },
  {
    question: '可以搭天鵝船或玩SUP嗎？',
    answer: '水岸休憩廣場曾提供天鵝船、SUP等活動；實際營運會受到天候、水位、活動安排及業者營業狀況影響，專程前往前應確認當日現場資訊。',
  },
  {
    question: '附近可以一起安排哪些景點？',
    answer: '步行範圍可串連菱潭街興創基地、鍾肇政文學生活園區與龍元宮商圈；自駕一日遊則可再前往三坑老街、臺灣客家茶文化館或石門水庫。',
  },
] as const;

export const waterPlayNotice = {
  updated: '2026 年 10 月更新',
  title: '龍潭大池戲水區暫停開放',
  text: '龍潭大池公園戲水區自 2026 年 8 月 3 日起暫停開放，恢復開放日期以龍潭區公所公告為準。此公告針對戲水區，不代表整座龍潭大池公園停止開放。',
  url: 'https://www.longtan.tycg.gov.tw/News_Content.aspx?n=5597&s=1776721',
  source: '桃園市龍潭區公所',
} as const;

export const topicPages = [
  {
    slug: 'longtan-attractions',
    label: '龍潭景點推薦',
    summary: '湖畔、老街、客家文化與周邊一日遊的景點比較。',
    image: 'longtan-boardwalk',
  },
  {
    slug: 'parking',
    label: '停車與交通',
    summary: '地址、導航、公車站與活動期間交通提醒。',
    image: 'longtan-blue-hour',
  },
  {
    slug: 'night-view',
    label: '吊橋夜景',
    summary: '亮燈時刻、拍攝點與藍調時刻的夜景安排。',
    image: 'longtan-night',
  },
  {
    slug: 'family-guide',
    label: '親子遊玩',
    summary: '親子路線、遊戲空間與戲水區最新公告。',
    image: 'longtan-golden-hour',
  },
] as const;

export const attractions = [
  {
    name: '龍潭大池（龍潭觀光大池）',
    tag: '湖畔地標',
    text: '觀光吊橋、南天宮與環湖步道集中於此，是造訪龍潭的主要起點。',
    bestFor: ['親子', '情侶', '攝影'],
    transport: '公車至「龍潭大池」或「龍潭大池（神龍路）」站，步行即達。',
    plan: '半日',
  },
  {
    name: '菱潭街興創基地',
    tag: '老街活化',
    text: '由舊市場改造的文創與輕食空間，適合慢走與拍照。',
    bestFor: ['散步', '文青'],
    transport: '距離大池步行可達，可併入市區半日遊。',
    plan: '市區半日',
  },
  {
    name: '龍潭聖蹟亭',
    tag: '百年古蹟',
    text: '保存完整的敬字亭，見證龍潭文風與客家敬字傳統。',
    bestFor: ['文化', '攝影'],
    transport: '位於龍潭市區，自駕或公車轉乘皆宜。',
    plan: '文化半日',
  },
  {
    name: '鍾肇政文學生活園區',
    tag: '文學展館',
    text: '作家鍾肇政故居整理而成的文學生活園區，適合認識龍潭人文。',
    bestFor: ['文青', '親子'],
    transport: '龍潭市區內，可與聖蹟亭、菱潭街串連。',
    plan: '文化半日',
  },
  {
    name: '龍元宮商圈',
    tag: '在地商圈',
    text: '以龍元宮為中心的在地商圈，聚集小吃與日常店家。',
    bestFor: ['美食', '散步'],
    transport: '龍潭市區，步行可串連多個景點。',
    plan: '順遊',
  },
  {
    name: '三坑老街',
    tag: '客家老街',
    text: '保留客家風情的老街與周邊梯田、落羽松，適合拍照與半日遊。',
    bestFor: ['拍照', '親子'],
    transport: '自駕約 15 分鐘，或搭乘大眾運輸轉乘。',
    plan: '一日',
  },
  {
    name: '臺灣客家茶文化館',
    tag: '茶文化',
    text: '介紹臺灣客家茶產業與飲茶文化，有展覽與體驗活動。',
    bestFor: ['文化', '親子'],
    transport: '自駕或轉乘至龍潭茶業展售中心一帶。',
    plan: '半日',
  },
  {
    name: '石門水庫',
    tag: '風景水庫',
    text: '桃園指標性水庫風景區，有環湖道路、自行車與壩區景觀。',
    bestFor: ['戶外', '親子'],
    transport: '自駕約 20–30 分鐘，適合安排一日遊。',
    plan: '一日',
  },
] as const;

export const attractionFaqs = [
  {
    question: '龍潭除了龍潭大池還有什麼景點？',
    answer: '龍潭還有菱潭街興創基地、龍潭聖蹟亭、鍾肇政文學生活園區、龍元宮商圈，以及稍遠的三坑老街、臺灣客家茶文化館與石門水庫，可依照時間串連。',
  },
  {
    question: '龍潭景點適合安排幾天？',
    answer: '只玩龍潭大池約半日；若加入市區文化景點可排一天；想走到三坑、石門水庫則建議安排一日遊。',
  },
  {
    question: '龍潭景點之間怎麼移動？',
    answer: '大池、菱潭街、聖蹟亭、鍾肇政園區與龍元宮都在龍潭市區，步行或短程轉乘即可；三坑與石門水庫建議自駕或搭乘大眾運輸轉乘。',
  },
  {
    question: '這些景點需要門票嗎？',
    answer: '龍潭大池戶外空間免費；其他景點多為免費或低價，實際收費以各場域現場與官方公告為準。',
  },
] as const;

export const parkingFaqs = [
  {
    question: '龍潭大池地址是哪裡？',
    answer: '桃園市龍潭區中豐路上林段115巷11號，亦可用地圖座標 24.8636, 121.2094 開啟導航。',
  },
  {
    question: '龍潭大池怎麼停車？',
    answer: '周邊有公有、民營停車空間與合法路邊停車格可尋找；本站立場為提供到達方向，不保證單一車位一定可用，出發當日請以現場與指示為準。',
  },
  {
    question: '搭大眾運輸怎麼到？',
    answer: '可在龍潭市區轉乘公車，於「龍潭大池」或「龍潭大池（神龍路）」站下車；班次與假日觀光公車可能調整，請當日確認。',
  },
  {
    question: '大型活動期間交通會改變嗎？',
    answer: '端午龍舟賽、煙火或市集期間，周邊道路可能實施臨時管制，平日車位也可能暫停開放，建議提早抵達並預留步行距離。',
  },
] as const;

export const nightFaqs = [
  {
    question: '龍潭大池夜景什麼時候最好？',
    answer: '建議下午 4 點半後抵達，先看完日光湖景，再等天色轉藍與橋燈亮起；藍調時刻通常只有一段，建議提早找好位置。',
  },
  {
    question: '吊橋每天都會亮燈嗎？',
    answer: '吊橋設有夜間照明，但實際亮燈方式可能隨季節、節慶、天候或維護調整，本站不固定刊登單一亮燈時刻。',
  },
  {
    question: '夜景適合拍照嗎？',
    answer: '西岸可收進南天宮與吊橋全景，湖面平靜時能拍到倒影；夜間請保留高光細節，並避免在橋面中央長時間架設腳架。',
  },
  {
    question: '晚上去交通怎麼安排？',
    answer: '夜間同樣以自駕或公車抵達，周邊停車與白天相同；返程較晚時可先確認公車末班時間。',
  },
] as const;

export const familyFaqs = [
  {
    question: '帶孩子去龍潭大池怎麼玩？',
    answer: '以水岸廣場、吊橋、南天宮與湖畔步道為主，節奏放輕鬆，並預留休息與補水時間。',
  },
  {
    question: '龍潭大池戲水區開放了嗎？',
    answer: '龍潭大池公園戲水區自 2026 年 8 月 3 日起暫停開放，恢復日期以龍潭區公所公告為準；此公告僅針對戲水區，不代表整座公園停止開放。',
  },
  {
    question: '推嬰兒車方便嗎？',
    answer: '主要水岸路線整體平緩，吊橋入口經過友善坡度改善，適合輕鬆步行與推車；臨水、木棧或人潮密集路段仍需放慢速度。',
  },
  {
    question: '親子要注意什麼？',
    answer: '臨水處牽好幼童、自備防曬與飲水、雨後橋面與木棧道可能較滑；水上活動與戲水設施可能因天候或維護臨時調整。',
  },
] as const;
