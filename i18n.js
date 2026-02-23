// Lightweight i18n helper shared across all pages
// Stores selected language in localStorage under "appLang"

const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'appLang';

const SUPPORTED_LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ms', label: 'Bahasa Melayu' },
  { code: 'zh', label: '中文 (Simplified)' },
  { code: 'ta', label: 'தமிழ் (Tamil)' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ar', label: 'العربية' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
];

// Translation keys and strings used across pages
const TEXT_KEYS = {
  'Search shops': 'search_shops',
  'Quick filters': 'quick_filters',
  'All': 'all',
  'Open now': 'open_now',
  'Closed': 'closed',
  'Favourites': 'favourites',
  'View menu': 'view_menu',
  'Preview menu': 'preview_menu',
  'Rate this shop': 'rate_shop',
  'Update rating': 'update_rating',
  'Loading shops…': 'loading_shops',
  'Preparing menus…': 'preparing_menus',
  'Profile': 'profile',
  'Settings': 'settings',
  'Language': 'language',
  'Sign out': 'sign_out',
  'Home': 'home',
  'Dark mode': 'dark_mode',
  'Student Access': 'student_access',
  'Student Login': 'student_login',
  'Login': 'login',
  'Register': 'register',
  'Reset': 'reset',
  'Email': 'email',
  'Password': 'password',
  'Send reset link': 'send_reset',
  'Continue as guest': 'continue_guest',
  'Need help?': 'need_help',
  'Back to login': 'back_login',
  'Remembered password?': 'remembered_password',
  'Order Summary': 'order_summary',
  'Your Order Status': 'order_status_title',
  'Your Order History': 'order_history_title',
  'Back to Home': 'back_home',
  'Order Again': 'order_again',
  'Your order is on the way!': 'order_on_the_way',
  'Your order is being prepared.': 'order_preparing',
  'Cart': 'cart',
  'Checkout': 'checkout',
  'Available now': 'available_now',
  'Add': 'add',
  'Customize': 'customize',
  'Not available': 'not_available',
  'Your cart is empty.': 'cart_empty',
  'Total': 'total',
  'Log out': 'log_out',
  'Sign in': 'sign_in',
};

const TRANSLATIONS = {
  en: Object.fromEntries(Object.values(TEXT_KEYS).map(k => [k, Object.keys(TEXT_KEYS).find(key => TEXT_KEYS[key] === k)])),
  ms: {
    search_shops: 'Cari kedai',
    quick_filters: 'Tapis pantas',
    all: 'Semua',
    open_now: 'Buka sekarang',
    closed: 'Tutup',
    favourites: 'Kegemaran',
    view_menu: 'Lihat menu',
    preview_menu: 'Pratonton menu',
    rate_shop: 'Nilai kedai ini',
    update_rating: 'Kemas kini penilaian',
    loading_shops: 'Memuatkan kedai…',
    preparing_menus: 'Menyiapkan menu…',
    profile: 'Profil',
    settings: 'Tetapan',
    language: 'Bahasa',
    sign_out: 'Log keluar',
    home: 'Laman utama',
    dark_mode: 'Mod gelap',
    student_access: 'Akses Pelajar',
    student_login: 'Log Masuk Pelajar',
    login: 'Log masuk',
    register: 'Daftar',
    reset: 'Tetap semula',
    email: 'E-mel',
    password: 'Kata laluan',
    send_reset: 'Hantar pautan set semula',
    continue_guest: 'Teruskan sebagai tetamu',
    need_help: 'Perlukan bantuan?',
    back_login: 'Kembali ke log masuk',
    remembered_password: 'Sudah ingat kata laluan?',
    order_summary: 'Ringkasan Pesanan',
    order_status_title: 'Status Pesanan Anda',
    order_history_title: 'Sejarah Pesanan Anda',
    back_home: 'Kembali ke Utama',
    order_again: 'Pesan semula',
    order_on_the_way: 'Pesanan anda dalam perjalanan!',
    order_preparing: 'Pesanan anda sedang disediakan.',
    cart: 'Troli',
    checkout: 'Bayar',
    available_now: 'Tersedia sekarang',
    add: 'Tambah',
    customize: 'Ubah suai',
    not_available: 'Tidak tersedia',
    cart_empty: 'Troli anda kosong.',
    total: 'Jumlah',
    log_out: 'Log keluar',
    sign_in: 'Log masuk',
  },
  zh: {
    search_shops: '搜索商家',
    quick_filters: '快速筛选',
    all: '全部',
    open_now: '现在营业',
    closed: '休息中',
    favourites: '收藏',
    view_menu: '查看菜单',
    preview_menu: '预览菜单',
    rate_shop: '评价此店',
    update_rating: '更新评分',
    loading_shops: '正在加载商家…',
    preparing_menus: '正在准备菜单…',
    profile: '个人资料',
    settings: '设置',
    language: '语言',
    sign_out: '退出登录',
    home: '首页',
    dark_mode: '深色模式',
    student_access: '学生登录',
    student_login: '学生登录',
    login: '登录',
    register: '注册',
    reset: '重置',
    email: '邮箱',
    password: '密码',
    send_reset: '发送重置链接',
    continue_guest: '以访客身份继续',
    need_help: '需要帮助？',
    back_login: '返回登录',
    remembered_password: '记起密码了？',
    order_summary: '订单摘要',
    order_status_title: '订单状态',
    order_history_title: '订单记录',
    back_home: '返回首页',
    order_again: '再次下单',
    order_on_the_way: '您的订单正在路上！',
    order_preparing: '您的订单正在准备。',
    cart: '购物车',
    checkout: '结账',
    available_now: '当前可用',
    add: '添加',
    customize: '自定义',
    not_available: '不可用',
    cart_empty: '购物车为空。',
    total: '合计',
    log_out: '退出登录',
    sign_in: '登录',
  },
  ta: {
    search_shops: 'கடைகளை தேடவும்',
    quick_filters: 'விரைவு வடிகட்டிகள்',
    all: 'அனைத்து',
    open_now: 'இப்போது திறந்துள்ளது',
    closed: 'மூடப்பட்டுள்ளது',
    favourites: 'பிடித்தவை',
    view_menu: 'மெனுவைக் காண்க',
    preview_menu: 'மெனு முன்னோட்டம்',
    rate_shop: 'இந்த கடைக்கு மதிப்பிடு',
    update_rating: 'மதிப்பெண்ணை புதுப்பிக்க',
    loading_shops: 'கடைகள் ஏற்றப்படுகிறது…',
    preparing_menus: 'மெனுக்கள் தயாராகின்றன…',
    profile: 'சுயவிவரம்',
    settings: 'அமைப்புகள்',
    language: 'மொழி',
    sign_out: 'வெளியேறு',
    home: 'முகப்பு',
    dark_mode: 'இருள் நிலை',
    student_access: 'மாணவர் அணுகல்',
    student_login: 'மாணவர் உள்நுழைவு',
    login: 'உள் நுழை',
    register: 'பதிவு',
    reset: 'மீட்டமை',
    email: 'மின்னஞ்சல்',
    password: 'கடவுச்சொல்',
    send_reset: 'மீட்டமைப்பு இணைப்பை அனுப்பு',
    continue_guest: 'விருந்தினராகத் தொடரவும்',
    need_help: 'உதவி தேவை?',
    back_login: 'உள் நுழைவுக்கு திரும்ப',
    remembered_password: 'கடவுச்சொல் நினைவில் உள்ளதா?',
    order_summary: 'ஆர்டர் சுருக்கம்',
    order_status_title: 'உங்கள் ஆர்டர் நிலை',
    order_history_title: 'உங்கள் ஆர்டர் வரலாறு',
    back_home: 'முகப்புக்குத் திரும்ப',
    order_again: 'மீண்டும் ஆர்டர் செய்யவும்',
    order_on_the_way: 'உங்கள் ஆர்டர் வருகிறதே!',
    order_preparing: 'உங்கள் ஆர்டர் தயாராகிறது.',
    cart: 'வண்டி',
    checkout: 'கட்டணம்',
    available_now: 'இப்போது கிடைக்கிறது',
    add: 'சேர்க்க',
    customize: 'தனிப்பயன்',
    not_available: 'கிடைக்கவில்லை',
    cart_empty: 'உங்கள் வண்டி காலியாக உள்ளது.',
    total: 'மொத்தம்',
    log_out: 'வெளியேறு',
    sign_in: 'உள் நுழை',
  },
};

function getStoredLanguage() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
}

export function setLanguage(lang) {
  const code = SUPPORTED_LANGS.some(l => l.code === lang) ? lang : DEFAULT_LANG;
  localStorage.setItem(STORAGE_KEY, code);
  applyTranslations(document, code);
}

function resolveKey(textOrKey) {
  if (TEXT_KEYS[textOrKey]) return TEXT_KEYS[textOrKey];
  return textOrKey; // already a key
}

function translateKey(key, lang) {
  const targetLang = lang || getStoredLanguage();
  const resolved = TRANSLATIONS[targetLang]?.[key];
  if (resolved) return resolved;
  // fallback to English text
  return TRANSLATIONS.en?.[key] || key;
}

function translateElement(el, lang) {
  const keyAttr = el.dataset?.i18nKey || el.dataset?.i18n;
  const attrTarget = el.dataset?.i18nAttr;
  const langCode = lang || getStoredLanguage();
  let resolvedKey = keyAttr ? resolveKey(keyAttr) : null;

  // If no explicit key, try to reuse previously stored key
  if (!resolvedKey && el.dataset && el.dataset.i18nApplied) {
    resolvedKey = el.dataset.i18nApplied;
  }

  // If still no key, derive from current text content (works on first pass)
  if (!resolvedKey && el.childNodes && el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
    const raw = el.textContent.trim();
    resolvedKey = resolveKey(raw);
  }

  if (!resolvedKey) return;

  const translated = translateKey(resolvedKey, langCode);
  el.dataset.i18nApplied = resolvedKey;

  if (attrTarget) {
    el.setAttribute(attrTarget, translated);
  } else {
    el.textContent = translated;
  }
}

export function applyTranslations(root = document, lang) {
  const langCode = lang || getStoredLanguage();
  root.querySelectorAll('[data-i18n],[data-i18n-key],[data-i18n-attr]').forEach(el => translateElement(el, langCode));
  root.querySelectorAll('*').forEach(el => translateElement(el, langCode));
  // Update html lang for accessibility
  if (root.documentElement) root.documentElement.lang = langCode;
}

export function initLanguageSelector(selectEl) {
  if (!selectEl) return;
  const current = getStoredLanguage();
  selectEl.innerHTML = '';
  SUPPORTED_LANGS.forEach(lang => {
    const opt = document.createElement('option');
    opt.value = lang.code;
    opt.textContent = lang.label;
    if (lang.code === current) opt.selected = true;
    selectEl.appendChild(opt);
  });
  selectEl.addEventListener('change', (e) => setLanguage(e.target.value));
}

export function getSupportedLanguages() {
  return SUPPORTED_LANGS.slice();
}

export function getCurrentLanguage() {
  return getStoredLanguage();
}

// Convenience for pages that want a quick boot
export function bootI18n(selectors = []) {
  applyTranslations();
  selectors.forEach(sel => initLanguageSelector(document.querySelector(sel)));
}
