/* Global State */ let bgMusic, hoverSoundElement, soundToggle, soundText;
let audioEnabled = false;
let lastScrollY = window.scrollY; // Global scope for scroll tracking

// --- INITIALIZATION ---
function revealHiddenArchive() {
  const mainNav = document.getElementById("main-nav");

  document.body.classList.add("start-anim");

  calculateCharPositions();
  setupScrollReveal();
  setupHoverSounds();

  // Initialize the specific typewriter element
  const typeTarget = document.querySelector(".typewriter-target");
  if (typeTarget) {
    runTypewriter(typeTarget, "DECLASSIFIED ACHIEVED");
  }
}

// --- 1. TYPEWRITER LOGIC (Specific for the yellow text) ---
function runTypewriter(el, text) {
  let i = 0;
  el.innerText = ""; // Clear existing

  function type() {
    if (i < text.length) {
      el.innerText += text.charAt(i);
      i++;
      setTimeout(type, 50); // Speed of typing
    }
  }
  // Small delay so it starts after the letters assemble
  setTimeout(type, 1000);
}

// --- 2. CONSOLIDATED SCROLL LOGIC ---
window.addEventListener(
  "scroll",
  () => {
    const currentScrollY = window.scrollY;
    const mainNav = document.getElementById("main-nav");

    if (true) {
      // Threshold: Only start hiding after 100px
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling Down - Hide
          mainNav.classList.add("nav-hidden");
          console.dir(mainNav);
        } else {
          // Scrolling Up - Show
          mainNav.classList.remove("nav-hidden");
        }
      } else {
        // Near top - Always show

        mainNav.classList.remove("nav-hidden");
      }
    }

    // 3. TIMELINE PROGRESS LINE
    const progressLine = document.querySelector(".timeline-progress-line");
    const timelineSection = document.getElementById("timelineSection");
    if (progressLine && timelineSection) {
      const rect = timelineSection.getBoundingClientRect();
      let scroll =
        (window.innerHeight - rect.top) /
        (rect.height + window.innerHeight / 2);
      scroll = Math.min(Math.max(scroll * 100, 0), 100);
      progressLine.style.height = `${scroll}%`;
    }

    lastScrollY = currentScrollY;
  },
  { passive: true },
);

/* --- REST OF YOUR FUNCTIONS (Keep these as they are) --- */

function handleAudioToggle() {
  if (!bgMusic) return;
  if (!audioEnabled) {
    bgMusic
      .play()
      .then(() => {
        audioEnabled = true;
        soundToggle.classList.add("is-on");
        soundText.innerText = "Audio: ON";
      })
      .catch(err => console.error(err));
  } else {
    bgMusic.pause();
    audioEnabled = false;
    soundToggle.classList.remove("is-on");
    soundText.innerText = "Audio: OFF";
  }
}

const setupHoverSounds = () => {
  const interactiveElements = document.querySelectorAll(
    ".keyCard, .nav-item, .conspiracyBtn",
  );
  interactiveElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      if (audioEnabled && hoverSoundElement) {
        const playInstance = hoverSoundElement.cloneNode();
        playInstance.volume = 0.1;
        playInstance.play().catch(() => {});
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  bgMusic = document.getElementById("bgMusic");
  hoverSoundElement = document.getElementById("hoverSoundSrc");
  soundToggle = document.getElementById("sound-toggle");
  soundText = document.getElementById("sound-text");

  if (bgMusic) bgMusic.volume = 0.2;

  if (soundToggle) soundToggle.addEventListener("click", handleAudioToggle);

  const progressBar = document.getElementById("loader-bar");
  const percentText = document.getElementById("loader-percent");
  const logText = document.getElementById("loader-log");
  const loader = document.getElementById("area51-loader");

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 2;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        if (loader) {
          loader.style.opacity = "0";
          setTimeout(() => {
            loader.style.display = "none";
            revealHiddenArchive();
          }, 800);
        }
      }, 1000);
    }
    if (progressBar) progressBar.style.width = progress + "%";
    if (percentText) percentText.innerText = progress + "%";
  }, 100);
});

const calculateCharPositions = () => {
  const chars = document.querySelectorAll(".char");
  chars.forEach((char, i) => {
    const x = (Math.random() - 0.5) * 800;
    const y = (Math.random() - 0.5) * 800;
    const r = (Math.random() - 0.5) * 720;
    const delay = i * 0.01 + Math.random() * 0.2;
    char.style.setProperty("--x", `${x}px`);
    char.style.setProperty("--y", `${y}px`);
    char.style.setProperty("--r", `${r}deg`);
    char.style.setProperty("--delay", `${delay}s`);
  });
};

const setupScrollReveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        // Toggle 'active' so it hides when scrolling back up
        if (entry.isIntersecting) entry.target.classList.add("active");
        else entry.target.classList.remove("active");
      });
    },
    { threshold: 0.1 },
  );
  reveals.forEach(el => observer.observe(el));
};

$(document).ready(function () {
  $(".conspiracyBtn").click(function () {
    const card = $(this).closest(".conspiracyCard");
    const content = card.find(".content");
    $(".content").not(content).slideUp(300);
    content.slideToggle(300);
    $(this).toggleClass("open");
  });
});
