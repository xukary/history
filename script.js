// Image list - using local images included in the ZIP
const slides = [
  "images/purmerend1.jpg",
  "images/purmerend2.jpg",
  "images/purmerend3.jpg",
  "images/purmerend4.jpg",
  "images/purmerend5.jpg"
];

// Build slider DOM
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

// Dots
const dotsEl = document.getElementById('dots');
slides.forEach((_,i) => {
  const d = document.createElement('span');
  d.className = 'dot' + (i===0?' active':'');
  d.dataset.index = i;
  d.addEventListener('click', ()=> goToSlide(i));
  dotsEl.appendChild(d);
});

let index = 0;
const total = slides.length;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function updateSlider(){
  const w = slider.parentElement.clientWidth;
  slider.style.transform = `translateX(${-index*w}px)`;
  document.querySelectorAll('.dot').forEach((d,i)=> d.classList.toggle('active', i===index));
}

window.addEventListener('resize', updateSlider);
prevBtn.addEventListener('click', ()=> { index = (index-1+total)%total; updateSlider(); resetAuto(); });
nextBtn.addEventListener('click', ()=> { index = (index+1)%total; updateSlider(); resetAuto(); });

function goToSlide(i){ index = i; updateSlider(); resetAuto(); }

// Auto-play
let auto = setInterval(()=> { index = (index+1)%total; updateSlider(); }, 5000);
function resetAuto(){ clearInterval(auto); auto = setInterval(()=> { index = (index+1)%total; updateSlider(); }, 5000); }

// Initialize size after load
window.addEventListener('load', ()=> { updateSlider(); });

// ===== Multilingual translations (RU, NL, EN, AR) =====
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
    foundingText: "Purmerend появился как небольшое рыбацкое поселение на участке между озёрами Purmermeer, Beemster и Wormer. В 1410 году Виллем Эггерт (Willem Eggert) построил замок, а в 1434 году муниципалитет получил права города.",
    developmentTitle: "XVII—XIX века",
    developmentText: "В XVII веке были осушены близлежащие озёра (Beemster, Purmer, Wormer), что привело к развитию сельского хозяйства. В XIX веке улучшилось судоходство и транспорт — важную роль сыграл Noordhollandsch Kanaal.",
    modernTitle: "XX—XXI века",
    modernText: "В XX веке Purmerend развивался как пригород Амстердама; в 2022 муниципалитет Beemster был присоединён к Purmerend. Сегодня город известен рынками, зелёными зонами и населением около 80 000 человек.",
    galleryTitle: "Фотогалерея",
    mapTitle: "Карта",
    mapText: "Посмотрите, где находится Purmerend:",
    schoolTitle: "Школа Bladergroen",
    schoolText: "Bladergroen — одна из известных школ в регионе Purmerend, предлагающая качественное образование и творческую программу.",
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
    foundingText: "Purmerend ontstond als een klein vissersdorp tussen de meren Purmermeer, Beemster en Wormer. In 1410 bouwde Willem Eggert een kasteel en in 1434 kreeg de plaats stadsrechten.",
    developmentTitle: "17e—19e eeuw",
    developmentText: "In de 17e eeuw werden nabijgelegen meren drooggelegd (Beemster, Purmer, Wormer), wat leidde tot landbouwontwikkeling. In de 19e eeuw verbeterde de scheepvaart dankzij het Noordhollandsch Kanaal.",
    modernTitle: "20e—21e eeuw",
    modernText: "In de 20e eeuw ontwikkelde Purmerend zich als voorstad van Amsterdam; in 2022 werd Beemster bij Purmerend gevoegd. Tegenwoordig staat de stad bekend om zijn markten, groene zones en ongeveer 80.000 inwoners.",
    galleryTitle: "Fotogalerij",
    mapTitle: "Kaart",
    mapText: "Bekijk waar Purmerend ligt:",
    schoolTitle: "School Bladergroen",
    schoolText: "Bladergroen is een bekende school in de regio Purmerend met een creatief en degelijk onderwijsprogramma.",
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
    foundingText: "Purmerend began as a small fishing settlement between the lakes Purmermeer, Beemster and Wormer. In 1410 Willem Eggert built a castle, and in 1434 the settlement received city rights.",
    developmentTitle: "17th—19th centuries",
    developmentText: "In the 17th century nearby lakes were reclaimed (Beemster, Purmer, Wormer), boosting agriculture. In the 19th century navigation improved thanks to the Noordhollandsch Kanaal.",
    modernTitle: "20th—21st centuries",
    modernText: "In the 20th century Purmerend developed as a suburb of Amsterdam; in 2022 the municipality of Beemster merged into Purmerend. Today the city is known for markets, green areas and about 80,000 inhabitants.",
    galleryTitle: "Photo Gallery",
    mapTitle: "Map",
    mapText: "See where Purmerend is located:",
    schoolTitle: "Bladergroen School",
    schoolText: "Bladergroen is a well-known school in the Purmerend area offering solid and creative education programs.",
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
    foundingText: "نشأت بورميريند كقرية صيد صغيرة بين بحيرات Purmermeer وBeemster وWormer. في عام 1410 بنى ويلم إيجيرت قلعة، وفي عام 1434 حصلت البلدة على حقوق المدينة.",
    developmentTitle: "القرنين السابع عشر إلى التاسع عشر",
    developmentText: "في القرن السابع عشر تم تجفيف البحيرات المجاورة، مما أدى إلى تطور الزراعة. في القرن التاسع عشر تحسنت الملاحة بفضل قناة Noordhollandsch.",
    modernTitle: "القرن العشرون والحادي والعشرون",
    modernText: "في القرن العشرين تطورت بورميريند كضاحية لأمستردام؛ في 2022 اندمجت بلدية Beemster مع بورميريند. اليوم تشتهر المدينة بأسواقها ومساحاتها الخضراء وحوالي 80,000 نسمة.",
    galleryTitle: "معرض الصور",
    mapTitle: "الخريطة",
    mapText: "شاهد مكان بورميريند على الخريطة:",
    schoolTitle: "مدرسة بلادرجرون",
    schoolText: "بلادرجرون هي مدرسة معروفة في منطقة بورميريند تقدم برامج تعليمية مبدعة وجودة عالية.",
    footer: "© 2025 Purmerend Info"
  }
};

// Apply translations and handle RTL for Arabic
const select = document.getElementById('language-select');
select.addEventListener('change', (e) => {
  applyTranslations(e.target.value);
});

function applyTranslations(lang){
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if(translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  // Handle page direction for Arabic
  if(lang === 'ar'){
    document.documentElement.dir = 'rtl';
    document.body.style.direction = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
    document.body.style.direction = 'ltr';
  }
}

// Set default language based on browser or fallback to Russian
const browserLang = (navigator.language || navigator.userLanguage || 'ru').slice(0,2);
const defaultLang = ['ru','nl','en','ar'].includes(browserLang) ? browserLang : 'ru';
select.value = defaultLang;
applyTranslations(defaultLang);

// Simple accessibility: keyboard controls for slider
document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft') prevBtn.click();
  if(e.key === 'ArrowRight') nextBtn.click();
});
