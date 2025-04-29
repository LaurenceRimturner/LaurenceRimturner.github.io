// ⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆
// ⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿
// ⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀
// ⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
// ⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉


// Table of Content

// 1. NavBarScroll Effect
// 2. Hover Effect
// 3. Theme Change
// 4. DarkMode
// 5. NameChange
// 6. Follow Cursor
// 7. LoadingScreen
// 8. Fade-In Effect
// 9. Datum
// 10. Letter Fade-in Effect
// 11. SoftSkillsSlideShow
// 12. Modal Zertifikat
// 13. Modal Arbeitsproben
// 14. Section Scale
// 14. Geheimer DevMode


// NavBarScroll Effect
window.addEventListener("scroll", function () {
  let header = document.querySelector(".nav-bar");
  header.classList.toggle("is_sticky", window.scrollY > 20); 
});

// Hover Effect
function addLetterEffects() {
  document.querySelectorAll(".letter-fx").forEach((letter, index, letters) => {
    letter.addEventListener("mouseover", () => {
      letter.style.fontWeight = "200";
      if (index > 0) letters[index - 1].style.fontWeight = "400";
      if (index > 1) letters[index - 2].style.fontWeight = "700";
      if (index < letters.length - 1)
        letters[index + 1].style.fontWeight = "400";
      if (index < letters.length - 2)
        letters[index + 2].style.fontWeight = "700";
    });
    letter.addEventListener("mouseout", () =>
      letters.forEach((el) => (el.style.fontWeight = "700"))
    );
  });
}

// Theme Change
const themes = [
  {
    color: "#2C55D8",
    head: `<div onclick="themeChange()" class="letterFX-tag">
    <span class="letter-fx">K</span>
    <span class="letter-fx">r</span>
    <span class="letter-fx">e</span>
    <span class="letter-fx">a</span>
    <span class="letter-fx">t</span>
    <span class="letter-fx">i</span>
    <span class="letter-fx">v</span>
    <span class="letter-fx">i</span>
    <span class="letter-fx">t</span>
    <span class="letter-fx">ä</span>
    <span class="letter-fx">t</span>
  <span class="svg-box" onclick="themeChange()">
    <svg xmlns="http://www.w3.org/2000/svg"   stroke-width="5px" width="75" height="75" viewBox="0 0 64 64"><path stroke-width="5px" stroke="var(--main-white)" fill="var(--theme-color)" d="M15 51.3c-.6 0-1.2-.2-1.6-.7c-.9-.9-.9-2.3 0-3.2l30.3-30.3H19.5c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2H49c1.2 0 2.2 1 2.2 2.2v29.7c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2V20.5L16.6 50.7c-.4.4-1 .6-1.6.6"/></svg>
  </span>
    </div>`
  },
  {
    color: "#e49f04",
    head: `<div onclick="themeChange()" class="letterFX-tag">
    <span class="letter-fx">E</span>
    <span class="letter-fx">n</span>
    <span class="letter-fx">t</span>
    <span class="letter-fx">w</span>
    <span class="letter-fx">i</span>
    <span class="letter-fx">c</span>
    <span class="letter-fx">k</span>
    <span class="letter-fx">l</span>
    <span class="letter-fx">u</span>
    <span class="letter-fx">n</span>
    <span class="letter-fx">g</span>
    <span class="svg-box" onclick="themeChange()">
      <svg xmlns="http://www.w3.org/2000/svg"   stroke-width="5px" width="75" height="75" viewBox="0 0 64 64"><path stroke-width="5px" stroke="var(--main-white)" fill="var(--theme-color)" d="M15 51.3c-.6 0-1.2-.2-1.6-.7c-.9-.9-.9-2.3 0-3.2l30.3-30.3H19.5c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2H49c1.2 0 2.2 1 2.2 2.2v29.7c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2V20.5L16.6 50.7c-.4.4-1 .6-1.6.6"/></svg>
    </span>
    </div>`
  },
  {
    color: "#934fff",
    head: `<div onclick="themeChange()" class="letterFX-tag">
    <span class="letter-fx">M</span>
    <span class="letter-fx">e</span>
    <span class="letter-fx">d</span>
    <span class="letter-fx">i</span>
    <span class="letter-fx">a</span>
    <span class="letter-fx">d</span>
    <span class="letter-fx">e</span>
    <span class="letter-fx">s</span>
    <span class="letter-fx">i</span>
    <span class="letter-fx">g</span>
    <span class="letter-fx">n</span>
  <span class="svg-box" onclick="themeChange()">
    <svg xmlns="http://www.w3.org/2000/svg"   stroke-width="5px" width="75" height="75" viewBox="0 0 64 64"><path stroke-width="5px" stroke="var(--main-white)" fill="var(--theme-color)" d="M15 51.3c-.6 0-1.2-.2-1.6-.7c-.9-.9-.9-2.3 0-3.2l30.3-30.3H19.5c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2H49c1.2 0 2.2 1 2.2 2.2v29.7c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2V20.5L16.6 50.7c-.4.4-1 .6-1.6.6"/></svg>
  </span>
    </div>`
  },
];

let currentTheme = 0;

const themeChangeBtn = document.getElementById("themeChangeBtn");
const themeHeader = document.querySelector(".themeHeader");

function themeChange() {
  const { color, head } = themes[++currentTheme % themes.length];
  themeHeader.innerHTML = head;
  document.documentElement.style.setProperty("--theme-color", color);



  const iconColors = document.querySelectorAll(".icon-box img");

  if (
    document.documentElement.style.getPropertyValue("--main-white") ===
    "#2C2C2C"
  ) {
    iconColors.forEach((icon) => {
      icon.style.filter = "invert(1)";
    });
  } else {
    iconColors.forEach((icon) => {
      icon.style.filter = "invert(0)";
    });
  }

  addLetterEffects();
}

document.addEventListener("DOMContentLoaded", addLetterEffects);

// DarkMode

function darkMode() {
  const root = document.documentElement;
  const currentColor = getComputedStyle(root)
    .getPropertyValue("--main-white")
    .trim();
  const darkModeBtn = document.getElementById("darkMode");
  const navBar = document.querySelector(".nav-bar");
  const iconColors = document.querySelectorAll(".icon-box img");

  if (currentColor === "#fdfdfd") {
    root.style.setProperty("--main-font-color", "#fdfdfd");
    root.style.setProperty("--main-white", "#2C2C2C");
    darkModeBtn.innerHTML = "😎";
    iconColors.forEach((icon) => {
      icon.style.filter = "invert(1)";
    });
  } else {
    root.style.setProperty("--main-font-color", "#2C2C2C");
    root.style.setProperty("--main-white", "#fdfdfd");
    darkModeBtn.innerHTML = "🙂";
    iconColors.forEach((icon) => {
      icon.style.filter = "invert(0)";
    });
  }
}

// NameChange

let currentName = 0;
const names = [
  "<span>Lau</span>rin",
  "<span>Lau</span>rent",
  "<span>Lau</span>rence",
];
const nameTag = document.querySelector(".nameTag");

const updateCurrent = () => {
  currentName = (currentName + 1) % names.length;
  nameTag.innerHTML = names[currentName];
};

function nameChange() {
  nameTag.addEventListener("click", updateCurrent);
}

if (nameTag) {
  nameTag.innerHTML = names[currentName];
  nameChange();
}

//Follow Cursor

const anchorPoints = document.querySelectorAll("a, .item1, .letterFX-tag");
const MouseEventElement = document.getElementById("MouseEventElement");

let offsetX = 0;
let offsetY = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.2;

function updateMouseEventPosition() {
  offsetX += (targetX - offsetX) * speed;
  offsetY += (targetY - offsetY) * speed;

  MouseEventElement.style.left = `${offsetX}px`;
  MouseEventElement.style.top = `${offsetY}px`;

  requestAnimationFrame(updateMouseEventPosition);
}

setTimeout(() => {
  if (MouseEventElement) {
    document.addEventListener("mousemove", (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    });

    anchorPoints.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        MouseEventElement.style.width = "50px";
        MouseEventElement.style.height = "50px";
      });
      element.addEventListener("mouseleave", () => {
        MouseEventElement.style.width = "20px";
        MouseEventElement.style.height = "20px";
      });
    });
    updateMouseEventPosition();
  } else {
    console.error("Element mit ID 'MouseEventElement' wurde nicht gefunden.");
  }
}, 20);

// LoadingScreen

window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loadingScreen");
  const countUpNum = document.querySelector(".countUp");
  const loadingMessages = document.getElementById("toDoElements");
  const LoadingscreenCursor = document.querySelector(".LoadingscreenCursor");
  const innerLoadingScreenDiv = document.querySelector(".innerLoadingScreenDiv")
  let funnyQuotes = [
    "Es werden noch schnell die Divs zentriert...",
    "Es werden noch schnell die Farben gemischt...",
    "Es werden noch schnell die Bilder gepinselt...",
    "Es werden noch schnell die Texte geklöppelt...",
    "Es werden noch schnell die Abstände reingedrückt...",
    "Es werden noch schnell die Kanten glattgebügelt...",
    "Es wird noch schnell der Code geschrieben...",
    "Es werden noch schnell die Frames durchgejagt...",
    "Es werden noch schnell die Pixel sortiert...",
    "Es wird noch schnell alles neu verkabelt...",
    "Es wird noch schnell kurz durchgeatmet...",
    "Es wird noch schnell 'ne Mate gezischt...",
    "Es wird noch schnell der Bildschirm justiert...",
    "Es wird noch schnell das BIOS geupdated...",
    "Es werden noch schnell die Elemente gequetscht...",
    "Es wird noch schnell der Datenfluss freigegeben...",
    "Es wird noch schnell die Maus angeschlossen...",
    "Es werden noch schnell die Bugs kaschiert...",
    "Es werden noch schnell Abstürze verhindert...",
    "Es wird noch schnell der Ladebalken gefüttert...",
    "Es wird noch schnell die Pixelpolitur angesetzt...",
    "Es wird noch schnell das JavaScript gegoogelt...",
    "Es werden noch schnell die Animationen gestartet...",
    "Es werden noch schnell die Effekte aufgedreht...",
    "Es werden noch schnell die Klicks eingefangen...",
    "Es wird noch schnell das Bildmaterial angeordnet...",
    "Es wird noch schnell das Logo vergrößert...",
    "Es wird noch schnell die Katze gefüttert...",
    "Es wird noch schnell 'ne Pause gemacht...",
    "Es wird noch schnell ??????",
    "Es wird noch schnell [Hier Tätigkeit einfügen...]"
  ];

  const max = funnyQuotes.length;

  function randomQuoteLoading() {
    const randomIndex = Math.floor(Math.random() * max);
    loadingMessages.textContent = funnyQuotes[randomIndex];
  }
  setInterval(() => randomQuoteLoading(funnyQuotes), 1200); // Quotes wechsel


  const cursorImgs = [
    "./assets/Images/LoadingImg/CSD-PotsdamerPlatz.jpg",
    "./assets/Images/LoadingImg/CSD-Saeule.jpg",
    "./assets/Images/LoadingImg/Flix-Berlin.jpg",
    "./assets/Images/LoadingImg/Kreuzberg-Hinterhof.jpg",
    "./assets/Images/LoadingImg/Monbijouplatz.jpg",
    "./assets/Images/LoadingImg/VictoriaPark.jpg",
    "./assets/Images/LoadingImg/Wache-PotsdamerPlatz.jpg",
    "./assets/Images/LoadingImg/Luebeck-Grosseltern.jpg",
    "./assets/Images/LoadingImg/Luebeck-Muster.jpg",
    "./assets/Images/LoadingImg/Luebeck-Reflektion-Vase.jpg",
    "./assets/Images/LoadingImg/Luebeck-Parkhaus.jpg",
    "./assets/Images/LoadingImg/Luebeck-Gebaeude.jpg"
  ];
  
  const columns = 4;
  const rows = 3;
  const imgWidth = 400;
  const imgHeight = 400;
  
  const container = document.querySelector(".LoadingscreenCursor");

  cursorImgs.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "eager";
    container.appendChild(img);
  });
  
  const maxColIndex = columns - 1;
  const maxRowIndex = rows - 1;
  
  const mouseArea = document.getElementById("MouseEventElement");
  
  document.addEventListener("mousemove", (e) => {
    const { innerWidth: w, innerHeight: h } = window;
  
    const col = Math.floor((e.clientX / w) * columns);
    const row = Math.floor((e.clientY / h) * rows);
  
    const offsetX = col * -imgWidth;
    const offsetY = row * -imgHeight;
  
    container.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  
    mouseArea.style.left = `${e.clientX}px`;
    mouseArea.style.top = `${e.clientY}px`;
  });
  

  let startTime = performance.now();
  let duration = 10; // 5000

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
  
  function countUp(timestamp) {
    let elapsed = timestamp - startTime;
    let progress = Math.min(elapsed / duration, 1);
    let easedProgress = easeInOutCubic(progress);
    let percent = Math.floor(easedProgress * 100);
    countUpNum.innerHTML = `[${percent}/100]`;
  
    if (percent === 100) {
      setTimeout(() => {
        innerLoadingScreenDiv.classList.add("active");
        enableClickEvent();
      }, 500);
    } 
  
    if (progress < 1) {
      requestAnimationFrame(countUp);
    } else {
      setTimeout(() => {
        loadingScreen.classList.add("loadingScreen-hidden");
      }, 1000);
    }
  }
  
  function enableClickEvent() {
    loadingScreen.addEventListener("click", () => {
          MouseEventElement.style.width = "20px"
          MouseEventElement.style.height = "20px"
          MouseEventElement.style.borderRadius = "50px"          
      if (loadingScreen.parentNode) {
        const hiddenLoadingScreen = document.querySelector(".loadingScreen-hidden");
        if (hiddenLoadingScreen) {
          hiddenLoadingScreen.style.top = "-120vh"
        }
        MouseEventElement.removeChild(LoadingscreenCursor);
        setTimeout(() => {
        loadingScreen.parentNode.removeChild(loadingScreen);
        fadeInElements();
      }, 1000)
      }
    });

  }
  
  requestAnimationFrame(countUp);
  

  //Fade-In Effect

  function fadeInElements() {
    const elements = document.querySelectorAll(".fade");

    function fadeIn() {
      elements.forEach((el, index) => {
        const distInView =
          el.getBoundingClientRect().top - window.innerHeight + 20;

        if (distInView < 20) {
          setTimeout(() => {
            el.classList.add("visible");
          }, 50 + index * 25); // Element fade Pace
        }
        //  else {
        //     el.classList.remove("visible");
        // }
      });
    }

    fadeIn();
    window.addEventListener("scroll", fadeIn);
  }
});

// Datum

const workingHours = document.querySelectorAll(".workingHours");
const HoursContent = document.querySelectorAll(".workingHoursContent");

function concatZero(timeFrame) {
  return timeFrame < 10 ? "0".concat(timeFrame) : timeFrame;
}

function realTime() {
  let date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hr = date.getHours();

  // 24 hour time
  workingHours.forEach((Hours) => {
    Hours.innerHTML = `${concatZero(hr)} : ${concatZero(min)} : ${concatZero(
      sec
    )}`;
  });

  HoursContent.forEach((singleContent) => {
    if (hr < 7 || hr >= 22) {
      singleContent.textContent = "🔴 probably sleeping";
    } else if ((hr === 13 && min >= 30) || (hr === 14 && min < 30)) {
      singleContent.textContent = "🔵 probably pausing";
    } else if (
      (hr >= 7 && (hr < 13 || (hr === 13 && min < 30))) ||
      (hr >= 14 && (hr < 16 || (hr === 16 && min < 30)))
    ) {
      singleContent.textContent = "🟢 probably working on something";
    } else {
      singleContent.textContent = "🟡 probably enjoying life";
    }
  });
}

setInterval(realTime, 999);

// HeroImg Tilt

const tiltEffectSettings = {
  max: 7,
  perspective: 1000,
  scale: 1.1,
  speed: 400,
  easing: "cubic-bezier(.32,.76,.32,.76)",
};

const heroImgSection = document.querySelector(".hero-section");
const heroImg = document.querySelector(".heroImgBox");

let rect, divWidth, divHeight, animationFrameId;

function updateDimensions() {
  rect = heroImg.getBoundingClientRect();
  divWidth = rect.width;
  divHeight = rect.height;
}

heroImgSection.addEventListener("mouseenter", (event) => {
  updateDimensions();
  setTransition();
});

heroImgSection.addEventListener("mousemove", (event) => {
  if (animationFrameId) return;

  animationFrameId = requestAnimationFrame(() => {
    const mouseX = ((event.clientX - rect.left) / divWidth - 0.5) * 2;
    const mouseY = ((event.clientY - rect.top) / divHeight - 0.5) * 2;

    const sensitivity = 0.5;
    const rotateX = (tiltEffectSettings.max * mouseY * sensitivity).toFixed(2);
    const rotateY = (tiltEffectSettings.max * -mouseX * sensitivity).toFixed(2);

    heroImg.style.transform = `
    perspective(${tiltEffectSettings.perspective}px) 
    rotateX(${rotateX}deg) 
    rotateY(${rotateY}deg) 
    scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})
  `;

    animationFrameId = null;
  });
});

heroImgSection.addEventListener("mouseleave", () => {
  heroImg.style.transform = `
  perspective(${tiltEffectSettings.perspective}px) 
  rotateX(0deg) rotateY(0deg) scale3d(1,1,1)
`;
  setTransition();
});

// 🚀 Transition nur bei Enter & Leave
function setTransition() {
  heroImg.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
  clearTimeout(heroImg.transitionTimeoutId);
  heroImg.transitionTimeoutId = setTimeout(() => {
    heroImg.style.transition = "";
  }, tiltEffectSettings.speed);
}


// Letter Fade-in Effect

const fadeContainer = document.querySelector(".fade-container");
const fadeSection = document.querySelector("#fade-section");
const containers = document.querySelectorAll(".container");
const letters = document.querySelectorAll(".fade-letter-tag span");

let isSectionVisible = false;

// 📝 Konfiguration → Hier kannst du "Geschwindigkeit" einstellen
const startOffset = 0.1; // Startet 10% vor der Mitte (kleiner = früher)
const endOffset = 0.5; // Endet 50% nach der Mitte (größer = später)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      isSectionVisible = entry.isIntersecting;
      if (isSectionVisible) {
        fadeContainer.classList.add("active");
        fadeSection.classList.add("active");
      } else {
        fadeContainer.classList.remove("active");
        fadeSection.classList.remove("active");
      }
    });
  },
  { threshold: 0 }
);

observer.observe(fadeContainer);

// 2️⃣ Scroll-Logik → Steuert Progress mit Offsets
window.addEventListener("scroll", () => {
  if (!isSectionVisible) {
    return;
  }

  const rect = fadeContainer.getBoundingClientRect();
  const sectionHeight = fadeContainer.offsetHeight;
  const viewportHeight = window.innerHeight;

  const viewportMid = viewportHeight / 2;
  const distanceToMid = viewportMid - rect.top;

  // Progress von startOffset bis endOffset skalieren
  const rawProgress = distanceToMid / sectionHeight;
  const scaledProgress =
    (rawProgress - startOffset) / (endOffset - startOffset);
  const progress = Math.min(Math.max(scaledProgress, 0), 1); // Clamp zwischen 0 und 1

  // Buchstaben je nach Fortschritt anzeigen/verbergen
  letters.forEach((letter, index) => {
    const triggerPoint = (index + 1) / letters.length;

    if (progress >= triggerPoint) {
      letter.classList.add("visible");
    } else {
      letter.classList.remove("visible");
    }
  });

  const visiblePercentage = Math.max(
    0,
    Math.min(1, rect.bottom / viewportHeight)
  );

  if (visiblePercentage <= 0.25) {
    letters.forEach((letter) => letter.classList.remove("visible"));
  }
});

//SoftSkillsSlideShow

const slideShowSection = document.querySelector(".item6");
const slideShowContainer = document.querySelector(".innerSlider");
const slideShowIcons = document.querySelectorAll(".innerSlider img");

let pressed = false;
let startX;
let xOffset = 0;

const cloneSlides = () => {
  const slides = Array.from(slideShowContainer.children);

  if (slideShowContainer.dataset.cloned) return;

  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    slideShowContainer.appendChild(clone);
  });

  slides.reverse().forEach((slide) => {
    const clone = slide.cloneNode(true);
    slideShowContainer.insertBefore(clone, slideShowContainer.firstChild);
  });

  slideShowContainer.dataset.cloned = "true";
};

cloneSlides();

// Intersection Observer für Animationseffekte
const slideObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } 
      else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".innerSlider svg").forEach((icon) => {
  slideObserver.observe(icon);
});

slideShowSection.addEventListener("mouseenter", () => {
  MouseEventElement.style.width = "50px";
  MouseEventElement.style.height = "50px";
});

slideShowSection.addEventListener("mouseleave", () => {
  MouseEventElement.style.width = "20px";
  MouseEventElement.style.height = "20px";
});

function startDrag(e) {
  pressed = true;
  startX = (e.touches ? e.touches[0].clientX : e.clientX) - slideShowContainer.offsetLeft;
}

function endDrag() {
  pressed = false;
}

function moveDrag(e) {
  if (!pressed) return;
  e.preventDefault();

  let newX = (e.touches ? e.touches[0].clientX : e.clientX) - startX;
  slideShowContainer.style.left = `${newX}px`;

  checkBoundary();
}

// Events für Maus
slideShowSection.addEventListener("mousedown", startDrag);
window.addEventListener("mouseup", endDrag);
slideShowSection.addEventListener("mousemove", moveDrag);

// Events für Touch
slideShowSection.addEventListener("touchstart", startDrag);
window.addEventListener("touchend", endDrag);
slideShowSection.addEventListener("touchmove", moveDrag);

// Begrenzung der Slide-Bewegung
function checkBoundary() {
  const outerRect = slideShowSection.getBoundingClientRect();
  const innerRect = slideShowContainer.getBoundingClientRect();

  let currentLeft = parseInt(getComputedStyle(slideShowContainer).left, 10) || 0;

  if (currentLeft >= 0) {
    slideShowContainer.style.left = "0px";
    slideShowSection.style.setProperty("--before-bg", "transparent");
  } else {
    slideShowSection.style.setProperty(
      "--before-bg",
      "linear-gradient(90deg, var(--main-font-color), transparent)"
    );
  }

  if (currentLeft <= -(innerRect.width - outerRect.width)) {
    slideShowContainer.style.left = `-${innerRect.width - outerRect.width}px`;
    slideShowSection.style.setProperty("--after-bg", "transparent");
  } else {
    slideShowSection.style.setProperty(
      "--after-bg",
      "linear-gradient(90deg, transparent, var(--main-font-color))"
    );
  }
}

checkBoundary();

// Modal Zertifikat
const itemContainer = document.querySelector(".item2");

itemContainer.addEventListener("mouseenter", () => {
  let modalImgLoad = document.querySelector(".modal-img");

  if (!modalImgLoad) {
    modalImgLoad = document.createElement("img");
    modalImgLoad.classList.add("modal-img");
    modalImgLoad.src = "./assets/Images/freeCodeCamp-Zertifikat.JPG";
    modalImgLoad.alt = "FreeCodeCamp Zertifikat | JavaScript";

    MouseEventElement.appendChild(modalImgLoad);

    setTimeout(() => {
      modalImgLoad.classList.add("preview");
    }, 10);
  }
});

itemContainer.addEventListener("mouseleave", () => {
  const modalImgLoad = document.querySelector(".modal-img");
  
  if (modalImgLoad) {
    modalImgLoad.classList.remove("preview");

    setTimeout(() => {
      modalImgLoad.remove();
    }, 300);
  }
});

itemContainer.addEventListener("click", () => {
  let modalImgFullLoad = document.querySelector(".modal-img-full");

  if (!modalImgFullLoad) {
    modalImgFullLoad = document.createElement("div");
    modalImgFullLoad.classList.add("modal-img-full");

    const img = document.createElement("img");
    img.src = "./assets/Images/freeCodeCamp-Zertifikat.JPG";
    img.alt = "FreeCodeCamp Zertifikat | JavaScript";

    modalImgFullLoad.appendChild(img);
    document.body.appendChild(modalImgFullLoad);

    modalImgFullLoad.addEventListener("click", () => {
      modalImgFullLoad.remove();
    });
  }
});

// Modal Arbeitsproben

const workOuterContainer = document.querySelector(".work-OuterContainer");
const implementationDiv = document.querySelector("#implementation");
const documentationDiv = document.querySelector("#documentation");

let workModal = null;
let workInnerContainer = null;

workOuterContainer.addEventListener("mouseenter", () => {
  if (!workModal) {
    workModal = document.createElement("div");
    workModal.classList.add("work-Modal");

    workInnerContainer = document.createElement("div");

    const img1 = document.createElement("img");
    img1.loading = "lazy";
    img1.src = "./assets/Images/Portfolio-Thumbnail-Abschlussprüfung.jpg";
    img1.alt = "Abschlussprüfung";

    const img2 = document.createElement("img");
    img2.loading = "lazy";
    img2.src = "./assets/Images/Portfolio-Thumbnail-Dokumentation.jpg";
    img2.alt = "Dokumentation";

    workInnerContainer.appendChild(img1);
    workInnerContainer.appendChild(img2);
    workModal.appendChild(workInnerContainer);

    MouseEventElement.appendChild(workModal);

    setTimeout(() => {
      workModal.classList.add("active");
    }, 10);
  }
});

workOuterContainer.addEventListener("mouseleave", () => {
  if (workModal) {
    workModal.classList.remove("active");

    setTimeout(() => {
      workModal.remove();
      workModal = null;
    }, 300);
  }
});

implementationDiv.addEventListener("mouseenter", () => {
  if (workInnerContainer) {
    workInnerContainer.style.transform = "translate(0px, 0%)";
  }
});

documentationDiv.addEventListener("mouseenter", () => {
  if (workInnerContainer) {
    workInnerContainer.style.transform = "translate(0px, -100%)";
  }
});



// Section Scale

document.addEventListener("DOMContentLoaded", () => {
  const contentSection = document.querySelector(".content-section");

  if (!contentSection) return;

  const scaleObserver = new IntersectionObserver(
    ([entry]) => {
      const scaleValue = Math.min(1, 0.75 + entry.intersectionRatio * .85);
      contentSection.style.transform = `scale3d(${scaleValue}, ${scaleValue}, ${scaleValue})`;
    },
    { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
  );

  scaleObserver.observe(contentSection);
});

// Geheimer DevMode

const konamiCode = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a"
];
let keys = [];

document.addEventListener("keydown", (e) => {
  keys.push(e.key);
  keys.splice(-konamiCode.length - 1, keys.length - konamiCode.length);

  if (konamiCode.every((v, i) => v === keys[i])) {
    activateEasterEgg();
  }
});


// Snake Game aktivieren
function activateEasterEgg() {
  const canvas = document.getElementById("snake-canvas");
  const ctx = canvas.getContext("2d");
  const box = 10;
  let score = 0;

  let snake = [{ x: 150, y: 150 }];
  let food = {
    x: Math.floor(Math.random() * 30) * box,
    y: Math.floor(Math.random() * 30) * box,
  };

  let direction = "RIGHT";

  // Snake Canvas sichtbar machen
  canvas.style.display = "block";
  document.addEventListener("keydown", changeDirection);

  function changeDirection(event) {
    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    else if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  }

  function draw() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
      ctx.fillStyle = i === 0 ? "lime" : "green";
      ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === "LEFT") headX -= box;
    if (direction === "RIGHT") headX += box;
    if (direction === "UP") headY -= box;
    if (direction === "DOWN") headY += box;

    if (
      headX < 0 || headX >= canvas.width ||
      headY < 0 || headY >= canvas.height ||
      collision({ x: headX, y: headY }, snake)
    ) {
      clearInterval(game);
      alert("💥 Game Over! Score: " + score);
      canvas.style.display = "none";
      return;
    }

    let newHead = { x: headX, y: headY };

    if (headX === food.x && headY === food.y) {
      score++;
      food = {
        x: Math.floor(Math.random() * 30) * box,
        y: Math.floor(Math.random() * 30) * box,
      };
    } else {
      snake.pop();
    }

    snake.unshift(newHead);
  }

  function collision(head, arr) {
    return arr.some(segment => segment.x === head.x && segment.y === head.y);
  }

  // Snake bewegen
  let game = setInterval(draw, 100);
}

