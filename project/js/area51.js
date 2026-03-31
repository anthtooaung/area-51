/* Selectors */ const chars = document.querySelectorAll(".char");
const reveals = document.querySelectorAll(".reveal");
const images = document.querySelectorAll(".photo");

/* Functions/Helpers */

const setupAudio = () => {
  const bgMusic = new Audio(
    "../audio/numbthefeelings - before dawn (freetouse.com).mp3",
  );
  bgMusic.loop = true;
  bgMusic.volume = 0.3;

  const startAudio = () => {
    bgMusic
      .play()
      .catch(err => console.log("Audio play blocked until interaction"));
    document.removeEventListener("click", startAudio);
  };
  document.addEventListener("click", startAudio);
};

const setupHoverSounds = () => {
  const cards = document.querySelectorAll(".keyCard");
  const hoverSoundSrc = "../audio/click.wav";

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      console.log("Interacting with classified data...");
      const hoverSound = new Audio(hoverSoundSrc);
      hoverSound.volume = 0.3;
      hoverSound.play().catch(err => {
        console.log("Hover sound blocked until interaction", err);
      });
    });
  });
};

const setupScrollReveal = () => {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        // Remove active class to allow re-triggering when scrolling back up/down
        entry.target.classList.remove("active");
      }
    });
  }, observerOptions);

  // Target the typewriter animation and other reveal elements
  const revealElements = document.querySelectorAll(
    ".typewriter-animation, .reveal",
  );
  revealElements.forEach(el => observer.observe(el));
};

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("active");
    }
  });
}

function revealImages() {
  const triggerBottom = window.innerHeight * 0.85;

  images.forEach(img => {
    const imgTop = img.getBoundingClientRect().top;

    if (imgTop < triggerBottom) {
      img.classList.add("active");
      img.style.setProperty("--scan", "none");
    }
  });
}

function animateChars() {
  chars.forEach((char, i) => {
    const x = (Math.random() - 0.5) * 600; // left/right
    const y = (Math.random() - 0.5) * 600; // up/down
    const r = (Math.random() - 0.5) * 720; // rotation
    const delay = i * 0.01 + Math.random() * 0.3;

    char.style.setProperty("--x", `${x}px`);
    char.style.setProperty("--y", `${y}px`);
    char.style.setProperty("--r", `${r}deg`);
    char.style.setProperty("--delay", `${delay}s`);
  });
}

// Listeners/Handlers
document.addEventListener("DOMContentLoaded", () => {
  setupAudio();
  setupHoverSounds();
  setupScrollReveal();
  animateChars();

  // Observe header section for re-triggering chars animation
  const headerSection = document.querySelector(
    "section.max-w-full.bg-gradient-to-b.from-neutral-950",
  );
  if (headerSection) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateChars();
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(headerSection);
  }
});

const handleTimelineProgress = () => {
  const progressLine = document.querySelector(".timeline-progress-line");
  const timelineSection = progressLine.closest("section");

  // Calculate how much of the timeline section is scrolled
  const sectionRect = timelineSection.getBoundingClientRect();
  const sectionHeight = timelineSection.offsetHeight;
  const windowHeight = window.innerHeight;

  // Percentage of section visible
  let progress =
    (windowHeight - sectionRect.top) / (sectionHeight + windowHeight / 2);

  // Clamp between 0 and 100
  progress = Math.min(Math.max(progress * 100, 0), 100);

  progressLine.style.height = `${progress}%`;

  // Light up dots as we pass them
  const dots = document.querySelectorAll(".timeline-container .w-4.h-4");
  dots.forEach(dot => {
    const dotTop = dot.getBoundingClientRect().top;
    if (dotTop < windowHeight * 0.7) {
      dot.classList.add("timeline-dot-active", "bg-yellow-500");
    } else {
      dot.classList.remove("timeline-dot-active", "bg-yellow-500");
    }
  });
};

window.addEventListener("scroll", handleTimelineProgress);

$(document).ready(function () {
  $(".conspiracyBtn").click(function () {
    const currentBtn = $(this);
    const currentContent = currentBtn
      .closest(".conspiracyCard")
      .find(".content");

    // Close all others and reset their icons
    $(".content")
      .not(currentContent)
      .slideUp(300)
      .closest(".conspiracyCard")
      .find(".conspiracyBtn")
      .removeClass("open");

    // Toggle current one and icon state
    currentContent.slideToggle(300);
    currentBtn.toggleClass("open");
  });
});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll(".parallax").forEach(el => {
    el.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
  });
});

window.addEventListener("scroll", revealImages);
