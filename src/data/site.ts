export const site = {
  name: '龍潭大池旅遊指南',
  shortName: '龍潭大池',
  domain: 'LongtanDachi.com',
  url: 'https://longtandachi.com',
  description:
    '規劃桃園龍潭大池半日遊：整理吊橋夜景、南天宮、湖畔步道、交通停車、親子活動、水上體驗與周邊行程。',
  address: '桃園市龍潭區上林里中豐路上林段115巷11號',
  coordinates: {
    latitude: 24.8635524,
    longitude: 121.2094495,
  },
  mapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=24.8635524%2C121.2094495&destination_place_id=ChIJGWs7Pvs8aDQR85-UeY7fPWE',
  gaId: 'G-HXM22WWPKP',
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
