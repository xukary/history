// script.js — версия с прямыми ссылками на Wikimedia (работает без загрузки файлов)

// Список изображений (горизонтальные фото Purmerend с Wikimedia)
const slides = [
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/Purmerend_-_Kaasmarkt.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/87/Purmerend%2C_Bridge_in_the_center_of_town_%281%29.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/3/3b/Purmerend2.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/Purmerend_St_Nicolaaskerk.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Overzicht_Purmerend_-_Purmerend_-_20358982_-_RCE.jpg"
];

// Построение слайдов в DOM
const slider = document.getElementById('slider');
slides.forEach(src => {
  const s = document.createElement('div');
  s.className = 'slide';
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Purmerend photo';
  s.appendChild(img);
  slider.appendChild(s);
});

// Точки-индикаторы
const dotsEl = document.getElementById('dots');
slides.forEach((_, i) => {
  const d = document.createElement('span');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.dataset.index = i;
  d.addEventListener('click', () => goToSlide(i));
  dotsEl.appendChild(d);
});

let index = 0;
const total = slides.length;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function updateSlider(){
  const wrapperWidth = slider.parentElement.clientWidth;
  slider.style.transform = `translateX(${-index * wrapperWidth}px)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

window.addEventListener('resize', updateSlider);
prevBtn.addEventListener('click', () => { index = (index - 1 + total) % total; updateSlider(); resetAuto(); });
nextBtn.addEventListener('click', () => { index = (index + 1) % total; updateSlider(); resetAuto(); });

function goToSlide(i){ index = i; updateSlider(); resetAuto(); }

// Автоплей каждые 5 секунд
let auto = setInterval(()=> { index = (index + 1) % total; updateSlider(); }, 5000);
function resetAuto(){ clearInterval(auto); auto = setInterval(()=> { index = (index + 1) % total; updateSlider(); }, 5000); }

// Инициализация после загрузки страницы
window.addEventListener('load', () => { updateSlider(); });

// ===== Мульти-язык (RU, NL, EN, AR) =====
const translations = {
  ru: {
    title: "Purmerend — город с историей",
    subtitle: "Открой для себя Нидерланды с новой стороны 🇳🇱",
    navHistory: "История",
    navGallery: "Галерея",
    navMap: "Карта",
    navSchool: "Школа Bladergroen",
    historyTitle: "История Purmerend",
    foundingTitle: "Основание и ранняя история",
    foundingText: "Purmerend появился как небольшое рыбацкое поселение на участке между озёрами Purmermeer, Beemster и Wormer...",
    developmentTitle: "XVII—XIX века",
    developmentText: "В XVII веке были осушены близлежащие озёра, что привело к развитию сельского хозяйства...",
    modernTitle: "XX—XXI века",
    modernText: "В XX веке Purmerend развивался как пригород Амстердама; в 2022 муниципалитет Beemster был присоединён...",
    galleryTitle: "Фотогалерея",
    mapTitle: "Карта",
    mapText: "Посмотрите, где находится Purmerend:",
    schoolTitle: "Школа Bladergroen",
    schoolText: "Bladergroen — одна из известных школ в регионе Purmerend...",
    footer: "© 2025 Purmerend Info"
  },
  nl: {
    title: "Purmerend — stad met geschiedenis",
    subtitle: "Ontdek Nederland vanuit een nieuw perspectief 🇳🇱",
    navHistory: "Geschiedenis",
    navGallery: "Galerij",
    navMap: "Kaart",
    navSchool: "School Bladergroen",
    historyTitle: "Geschiedenis van Purmerend",
    foundingTitle: "Oprichting en vroege geschiedenis",
    foundingText: "Purmerend ontstond als een klein vissersdorp tussen de meren Purmermeer, Beemster en Wormer...",
    developmentTitle: "17e—19e eeuw",
    developmentText: "In de 17e eeuw werden nabijgelegen meren drooggelegd...",
    modernTitle: "20e—21e eeuw",
    modernText: "In de 20e eeuw ontwikkelde Purmerend zich als voorstad van Amsterdam...",
    galleryTitle: "Fotogalerij",
    mapTitle: "Kaart",
    mapText: "Bekijk waar Purmerend ligt:",
    schoolTitle: "School Bladergroen",
    schoolText: "Bladergroen is een bekende school in de regio Purmerend...",
    footer: "© 2025 Purmerend Info"
  },
  en: {
    title: "Purmerend — a city with history",
    subtitle: "Discover the Netherlands from a fresh perspective 🇳🇱",
    navHistory: "History",
    navGallery: "Gallery",
    navMap: "Map",
    navSchool: "Bladergroen School",
    historyTitle: "History of Purmerend",
    foundingTitle: "Founding and early history",
    foundingText: "Purmerend began as a small fishing settlement between the lakes Purmermeer, Beemster and Wormer...",
    developmentTitle: "17th—19th centuries",
    developmentText: "In the 17th century nearby lakes were reclaimed...",
    modernTitle: "20th—21st centuries",
    modernText: "In the 20th century Purmerend developed as a suburb of Amsterdam...",
    galleryTitle: "Photo Gallery",
    mapTitle: "Map",
    mapText: "See where Purmerend is located:",
    schoolTitle: "Bladergroen School",
    schoolText: "Bladergroen is a well-known school in Purmerend area...",
    footer: "© 2025 Purmerend Info"
  },
  ar: {
    title: "بورميريند — مدينة ذات تاريخ",
    subtitle: "اكتشف هولندا من منظور جديد 🇳🇱",
    navHistory: "التاريخ",
    navGallery: "المعرض",
    navMap: "الخريطة",
    navSchool: "مدرسة بلادرجرون",
    historyTitle: "تاريخ بورميريند",
    foundingTitle: "التأسيس والتاريخ المبكر",
    foundingText: "نشأت بورميريند كقرية صيد صغيرة بين البحيرات Purmermeer وBeemster وWormer...",
    developmentTitle: "القرن السابع عشر إلى التاسع عشر",
    developmentText: "في القرن السابع عشر تم تجفيف البحيرات المجاورة...",
    modernTitle: "القرن العشرون والحادي والعشرون",
    modernText: "في القرن العشرين تطورت بورميريند كضاحية لأمستردام...",
    galleryTitle: "معرض الصور",
    mapTitle: "الخريطة",
    mapText: "شاهد مكان بورميريند على الخريطة:",
    schoolTitle: "مدرسة بلادرجرون",
    schoolText: "بلادرجرون هي مدرسة معروفة في المنطقة...",
    footer: "© 2025 Purmerend Info"
  }
};

const select = document.getElementById('language-select');
select.addEventListener('change', (e) => applyTranslations(e.target.value));

function applyTranslations(lang){
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
  if(lang === 'ar'){ document.documentElement.dir = 'rtl'; document.body.style.direction = 'rtl'; }
  else { document.documentElement.dir = 'ltr'; document.body.style.direction = 'ltr'; }
}

// Устанавливаем язык по-умолчанию
const browserLang = (navigator.language || navigator.userLanguage || 'ru').slice(0,2);
const defaultLang = ['ru','nl','en','ar'].includes(browserLang) ? browserLang : 'ru';
select.value = defaultLang;
applyTranslations(defaultLang);

// Клавиши ← → для управления слайдером
document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft') prevBtn.click();
  if(e.key === 'ArrowRight') nextBtn.click();
});
