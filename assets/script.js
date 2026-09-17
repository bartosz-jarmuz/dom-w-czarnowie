const FLOORS = [
  {
    id: "przyziemie",
    label: "Przyziemie",
    meta: "poziom 0 · część dzienna",
    intro: "Wejście, salon i kuchnia — tu mieszka się w ciągu dnia. Do tej części należy też niewielki korytarz (2,56 m²) łączący pomieszczenia, bez własnej galerii zdjęć.",
    rooms: [
      {
        slug: "wiatrolap",
        title: "Wiatrołap",
        area: "5,75 m²",
        blurb: "Wejście do domu — pierwsze pomieszczenie, w którym można zostawić buty i kurtki przed dalszą częścią domu.",
        files: ["IMG_9353.jpg", "IMG_9354.jpg", "IMG_9355.jpg", "IMG_9356.jpg"],
      },
      {
        slug: "garderoba",
        title: "Garderoba",
        area: "3,06 m²",
        blurb: "Niewielka garderoba na przyziemiu, obecnie wykorzystywana jako pralnia / spiżarnia.",
        files: ["IMG_7403.jpg"],
      },
      {
        slug: "lazienka-mala",
        title: "Łazienka",
        area: "2,91 m²",
        blurb: "Łazienka na przyziemiu — prysznic i WC.",
        files: ["IMG_9347.jpg", "IMG_9350.jpg", "IMG_9351.jpg", "IMG_9352.jpg"],
      },
      {
        slug: "kuchnia",
        title: "Kuchnia",
        area: "7,43 m²",
        blurb: "Kuchnia otwarta na salon.",
        files: ["IMG_5184.jpg"],
      },
      {
        slug: "salon",
        title: "Salon",
        area: "28,03 m²",
        blurb: "Największe pomieszczenie w domu — salon z klatką schodową prowadzącą na poddasze. Serce domu, z widokiem na ogród.",
        files: ["IMG_5082.jpg", "IMG_5083.jpg", "IMG_6357.jpg", "IMG_6357_wideo.jpg", "IMG_7518.jpg", "IMG_7518_wideo.jpg", "2014_-_9125519_6_655x491_clean.jpg"],
      },
      {
        slug: "pokoj-8",
        title: "Pokój dziecięcy",
        area: "8,09 m²",
        blurb: "Dodatkowy pokój na przyziemiu, obecnie pokój dziecięcy — bez potrzeby wchodzenia po schodach.",
        files: ["IMG_1315.jpg", "IMG_1315_wideo.jpg", "IMG_3089.jpg", "IMG_3615.jpg"],
      },
    ],
  },
  {
    id: "poddasze",
    label: "Poddasze",
    meta: "część nocna",
    intro: "Poddasze użytkowe — tutaj śpi się i odpoczywa. Trzy sypialnie, druga łazienka i schowek, a wszystko pod skosami dachu.",
    rooms: [
      {
        slug: "klatka-schodowa",
        title: "Klatka schodowa",
        area: "2,74 m²",
        blurb: "Schody z salonu prowadzące na poddasze.",
        files: ["IMG_9376.jpg"],
      },
      {
        slug: "przedpokoj",
        title: "Przedpokój",
        area: "6,40 m²",
        blurb: "Niewielki hol na piętrze, z którego rozchodzą się wszystkie pomieszczenia poddasza.",
        files: ["20260917_210047.jpg"],
      },
      {
        slug: "pokoj-17",
        title: "Pokój",
        area: "17,27 m²",
        blurb: "Największy pokój na poddaszu. W zabudowanej wnęce znajduje się sauna. Obecnie funkcjonuje jako domowe biuro i siłownia — równie dobrze sprawdzi się jako sypialnia.",
        files: ["20180127_113306.jpg", "20241204_110742.jpg", "20260917_184015.jpg", "20260917_184028.jpg", "20260917_184113.jpg", "20260917_184136.jpg", "20260917_185916.jpg", "20260917_185928.jpg", "20260917_185944.jpg", "2014_-_9125519_13_655x491_clean.jpg"],
      },
      {
        slug: "pokoj-13",
        title: "Sypialnia",
        area: "13,08 m²",
        blurb: "Druga sypialnia na poddaszu, z dużą szafą i wyjściem na balkon.",
        files: ["IMG_5468.jpg", "2014_-_9125519_12_655x491_clean.jpg"],
      },
      {
        slug: "pokoj-9",
        title: "Pokój dziecięcy",
        area: "8,58 m²",
        blurb: "Trzeci, najmniejszy pokój na poddaszu — obecnie pokój dziecięcy.",
        files: ["IMG_3095.jpg"],
      },
      {
        slug: "lazienka-duza",
        title: "Łazienka",
        area: "5,77 m²",
        blurb: "Druga łazienka, na poddaszu — z wanną i WC.",
        files: ["IMG_9357.jpg", "IMG_9358.jpg", "IMG_9359.jpg", "IMG_9360.jpg", "IMG_9361.jpg"],
      },
      {
        slug: "schowek",
        title: "Schowek",
        area: "3,45 m²",
        blurb: "Schowek / składzik na poddaszu — dodatkowa przestrzeń na przechowywanie.",
        files: ["IMG_6361.jpg", "IMG_6361_wideo.jpg"],
      },
    ],
  },
  {
    id: "otoczenie",
    label: "Na zewnątrz",
    meta: "ogród, taras, zabudowania",
    intro: "Dom otacza zadbany ogród z wieloletnimi nasadzeniami, a na podjeździe zmieszczą się niezależnie dwa samochody. Do tego solidna wiata garażowa z budynkiem gospodarczym oraz sauna.",
    rooms: [
      {
        slug: "wiata",
        title: "Wiata garażowa",
        area: "",
        blurb: "Solidna wiata garażowa na podjeździe, obok budynku gospodarczego.",
        files: ["20260809_175229.jpg", "20260809_175533.jpg", "20260809_175559.jpg", "20260809_175610.jpg", "20260809_175715.jpg", "20260812_175254.jpg"],
      },
      {
        slug: "budynek-gospodarczy",
        title: "Budynek gospodarczy",
        area: "",
        blurb: "Budynek gospodarczy przy wiacie garażowej.",
        files: ["IMG_20200711_160328.jpg", "IMG_20200711_160337.jpg"],
      },
      {
        slug: "sauna",
        title: "Sauna",
        area: "",
        blurb: "Sauna wbudowana we wnękę największego pokoju na poddaszu (17 m²).",
        files: ["20241204_110535_wideo.jpg", "20241204_110610.jpg", "20241204_110618.jpg", "20241204_110628.jpg"],
      },
      {
        slug: "ogrod",
        title: "Ogród i otoczenie",
        area: "",
        blurb: "Ogród obsadzony wieloletnimi roślinami iglastymi i liściastymi, taras i otoczenie domu w różnych porach roku.",
        files: ["20230203_115105.jpg","20240317_190705.jpg","20240407_155729.jpg","20260809_175751.jpg","20260812_175036.jpg","20260812_191121.jpg","20260812_191146.jpg","20260905_160002.jpg","20260905_160025.jpg","20260917_123624.jpg","IMG_1474.jpg","IMG_20211224_125849.jpg","IMG_4112.jpg","IMG_4113.jpg","IMG_4921.jpg","IMG_4959.jpg","IMG_5018.jpg","IMG_5019.jpg","IMG_5021.jpg","IMG_5574.jpg","IMG_5655.jpg","IMG_6208.jpg","IMG_6209.jpg","IMG_6214.jpg","IMG_6509.jpg","IMG_6975.jpg","IMG_8093.jpg","IMG_8660.jpg","IMG_8874.jpg","IMG_8941.jpg","IMG_9207.jpg","IMG_9236.jpg","IMG_9238.jpg","IMG_9239.jpg","IMG_9242.jpg","IMG_9245.jpg","IMG_9249.jpg","IMG_9312.jpg","IMG_9314.jpg","IMG_9888.jpg"],
      },
    ],
  },
];

const SCANS = {
  rzuty: ["Adobe_Scan_16_wrz_2026__1__1.jpg","Adobe_Scan_16_wrz_2026__1__2.jpg","Adobe_Scan_16_wrz_2026__1__3.jpg","Adobe_Scan_16_wrz_2026__1__4.jpg","Adobe_Scan_16_wrz_2026__1__5.jpg","Adobe_Scan_16_wrz_2026__1__6.jpg"],
  opis: ["Adobe_Scan_16_wrz_2026_1.jpg","Adobe_Scan_16_wrz_2026_2.jpg","Adobe_Scan_16_wrz_2026_3.jpg","Adobe_Scan_16_wrz_2026_4.jpg"],
};

let lightboxItems = [];
let lightboxIndex = 0;

function registerLightboxImage(img, groupItems) {
  img.addEventListener("click", () => {
    lightboxItems = groupItems;
    lightboxIndex = groupItems.findIndex((it) => it.src === img.getAttribute("src"));
    showLightbox();
  });
}

function buildGallery(container, folder, files, extraClass) {
  const wrap = document.createElement("div");
  wrap.className = "gallery" + (extraClass ? " " + extraClass : "");
  const items = files.map((f) => ({ src: `images/${folder}/${f}` }));
  items.forEach((item, i) => {
    const fig = document.createElement("figure");
    const img = document.createElement("img");
    img.src = item.src;
    img.loading = "lazy";
    img.alt = "";
    fig.appendChild(img);
    registerLightboxImage(img, items);
    wrap.appendChild(fig);
  });
  container.appendChild(wrap);
  return wrap;
}

function renderFloors() {
  const root = document.getElementById("pomieszczenia-body");
  const navGroups = document.getElementById("rooms-dropdown");

  FLOORS.forEach((floor) => {
    const floorIntro = document.createElement("div");
    floorIntro.className = "floor-intro";
    floorIntro.id = floor.id;
    floorIntro.innerHTML = `
      <div class="floor-number">${floor.label === "Na zewnątrz" ? "🌿" : floor.rooms.length}</div>
      <h3>${floor.label}</h3>
      <span class="meta">${floor.meta}</span>
    `;
    root.appendChild(floorIntro);

    if (floor.intro) {
      const p = document.createElement("p");
      p.className = "outdoor-lead";
      p.style.textAlign = "left";
      p.style.maxWidth = "720px";
      p.style.margin = "0 0 28px";
      p.textContent = floor.intro;
      root.appendChild(p);
    }

    const navGroup = document.createElement("div");
    navGroup.className = "dropdown-group";
    navGroup.innerHTML = `<h4>${floor.label}</h4>`;

    floor.rooms.forEach((room) => {
      const section = document.createElement("div");
      section.className = "room";
      section.id = room.slug;
      section.innerHTML = `
        <div class="room-head">
          <h4>${room.title}</h4>
          ${room.area ? `<span class="room-area">${room.area}</span>` : ""}
        </div>
        <p class="room-blurb">${room.blurb}</p>
      `;
      root.appendChild(section);
      buildGallery(section, room.slug, room.files);

      const a = document.createElement("a");
      a.href = `#${room.slug}`;
      a.textContent = room.title + (room.area ? ` · ${room.area}` : "");
      navGroup.appendChild(a);
    });

    navGroups.appendChild(navGroup);
  });
}

function renderScans() {
  const rzutyContainer = document.getElementById("rzuty-gallery");
  buildGallery(rzutyContainer, "rzuty", SCANS.rzuty, "scans");

  const opisContainer = document.getElementById("opis-gallery");
  buildGallery(opisContainer, "opis", SCANS.opis, "scans");
}

function showLightbox() {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightbox-img").src = lightboxItems[lightboxIndex].src;
  lightbox.classList.add("open");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}
function stepLightbox(delta) {
  lightboxIndex = (lightboxIndex + delta + lightboxItems.length) % lightboxItems.length;
  showLightbox();
}

function setupLightboxControls() {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", (e) => { e.stopPropagation(); stepLightbox(-1); });
  document.getElementById("lightbox-next").addEventListener("click", (e) => { e.stopPropagation(); stepLightbox(1); });
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

function setupNav() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  toggle.addEventListener("click", () => links.classList.toggle("open"));

  document.querySelectorAll(".nav-item.has-dropdown > .nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth > 860) return;
      e.preventDefault();
      link.parentElement.classList.toggle("open");
    });
  });

  document.querySelectorAll(".nav-links a:not(.dropdown-toggle)").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      document.querySelectorAll(".nav-item.has-dropdown").forEach((el) => el.classList.remove("open"));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFloors();
  renderScans();
  setupLightboxControls();
  setupNav();
});
