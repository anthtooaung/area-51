document.addEventListener("DOMContentLoaded", () => {  const board = document.getElementById("board");
  const canvas = document.getElementById("string-canvas");
  const ctx = canvas.getContext("2d");
  const items = document.querySelectorAll(".evidence-item");

  // Modal Elements
  const modal = document.getElementById("evidence-modal");
  const modalContent = document.getElementById("modal-content");
  const closeModalBtn = document.getElementById("close-modal");

  const setupGlitch = () => {
    const title = document.querySelector(".typewriter-animation");
    if (title) {
      title.classList.add("glitch-text");
      title.setAttribute("data-text", title.textContent.trim());
    }
  };

  setupGlitch();

  // Resize canvas to fit board
  const resizeCanvas = () => {
    canvas.width = board.clientWidth;
    canvas.height = board.clientHeight;
    drawStrings();
  };

  // Draw the Red Yarn (Strings) connecting the evidence points
  const drawStrings = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(220, 38, 38, 0.75)"; // Red yarn color
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 5;
    ctx.shadowColor = "rgba(0,0,0,0.8)";

    items.forEach(item => {
      const connects = item.getAttribute("data-connects")?.split(",") || [];
      const rectA = item.getBoundingClientRect();
      const boardRect = board.getBoundingClientRect();

      // Center of the pin in item A
      const startX = rectA.left + rectA.width / 2 - boardRect.left;
      const startY = rectA.top + 10 - boardRect.top;

      connects.forEach(targetId => {
        const target = document.getElementById(targetId);
        if (target) {
          const rectB = target.getBoundingClientRect();
          const endX = rectB.left + rectB.width / 2 - boardRect.left;
          const endY = rectB.top + 10 - boardRect.top;

          ctx.beginPath();
          ctx.moveTo(startX, startY);

          // Add a slight realistic dip/curve to the string based on distance
          const distance = Math.sqrt(
            Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2),
          );
          const dip = distance * 0.12; // Slack in the string

          const cpX = (startX + endX) / 2;
          const cpY = (startY + endY) / 2 + dip;

          ctx.quadraticCurveTo(cpX, cpY, endX, endY);
          ctx.stroke();
        }
      });
    });
  };

  // Sound effects
  const playPaperSound = () => {
    const paperSound = new Audio(
      "../audio/numbthefeelings - before dawn (freetouse.com).mp3",
    );
    paperSound.volume = 0.1;
    paperSound.play().catch(() => {});
  };

  // Highest Z-index tracker for bringing dragged items to the front
  let highestZ = 50;

  // Simple Drag & Click Logic
  items.forEach(item => {
    let isDragging = false;
    let offsetX, offsetY;
    let startClickX, startClickY;

    item.addEventListener("mousedown", e => {
      isDragging = true;
      item.style.transition = "none";

      highestZ++;
      item.style.zIndex = highestZ;

      const rect = item.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      // Store coordinates to detect if it's a click or a drag
      startClickX = e.clientX;
      startClickY = e.clientY;

      playPaperSound();
    });

    document.addEventListener("mousemove", e => {
      if (!isDragging) return;
      const boardRect = board.getBoundingClientRect();
      let x = e.clientX - boardRect.left - offsetX;
      let y = e.clientY - boardRect.top - offsetY;

      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      drawStrings(); // Update strings dynamically while dragging
    });

    document.addEventListener("mouseup", e => {
      if (isDragging) {
        isDragging = false;
        item.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";

        // Calculate total distance mouse moved during the click
        const diffX = Math.abs(e.clientX - startClickX);
        const diffY = Math.abs(e.clientY - startClickY);

        // If moved less than 5 pixels, treat it as a CLICK (Open Fullscreen)
        if (diffX < 5 && diffY < 5) {
          openFullscreen(item);
        }
      }
    });
  });

  // ---- FULLSCREEN MODAL LOGIC ----

  function openFullscreen(item) {
    playPaperSound();

    // Clear previous modal content
    modalContent.innerHTML = "";

    // Clone the clicked item
    const clone = item.cloneNode(true);

    // Remove the red pin from the fullscreen version
    const pin = clone.querySelector(".pin");
    if (pin) pin.remove();

    // The CSS .modal-clone class strips the positioning and rotation
    modalContent.appendChild(clone);

    // Show Modal with fade-in animation
    modal.classList.remove("hidden");

    // Force browser reflow to ensure CSS transitions trigger
    void modal.offsetWidth;

    modal.classList.remove("opacity-0");
    modalContent.classList.remove("scale-90");
    modalContent.classList.add("scale-100");
  }

  function closeFullscreen() {
    // Hide Modal with fade-out animation
    modal.classList.add("opacity-0");
    modalContent.classList.remove("scale-100");
    modalContent.classList.add("scale-90");

    // Wait for animation to finish before setting display:none
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  }

  // Event Listeners for closing modal
  closeModalBtn.addEventListener("click", closeFullscreen);

  modal.addEventListener("click", e => {
    // Close if clicking anywhere inside the modal background
    // (Even if they click the cloned document, we close it for ease of use)
    closeFullscreen();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeFullscreen();
    }
  });

  // Initial draw setup
  window.addEventListener("resize", resizeCanvas);

  // Give DOM a split second to paint before getting positions
  setTimeout(resizeCanvas, 50);
});
