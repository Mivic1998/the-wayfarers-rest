console.log("Reveal script loaded");
document.addEventListener("DOMContentLoaded", () => {
  // Select BOTH reveal types
  const revealElements = document.querySelectorAll(".reveal, .reveal-sub");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach(el => observer.observe(el));
});

/* =========================
   MAP POPUP LOGIC
   ========================= */

// Select all map dots (the clickable markers)
const dots = document.querySelectorAll(".map-dot");

// Select all popup panels
const popups = document.querySelectorAll(".tavern-popup");

// Track which dot is currently active (if any)
let activeDot = null;

// Flag used to ignore scroll events triggered by our own auto-scrolling
let ignoreNextScroll = false;

/* ---------- Close all popups ---------- */
function closeAllPopups() {
  // Hide every popup panel
  popups.forEach(popup => popup.classList.remove("active"));

  // If a dot was marked active, reset it
  if (activeDot) {
    activeDot.classList.remove("active");
    activeDot = null;
  }
}

/* ---------- Position popup relative to map ---------- */
function positionPopup(dot, popup) {
  // Find the map container the dot belongs to
  const map = dot.closest(".map-wrapper");

  // Gap between dot and popup so they don’t touch visually
  const gap = 16;

  // Get map dimensions
  const mapHeight = map.offsetHeight;
  const mapWidth = map.offsetWidth;

  // Measure popup size (after it becomes visible)
  const popupRect = popup.getBoundingClientRect();

  /* ---------- Horizontal positioning ---------- */

  // Default: place popup to the right of the dot
  let left = dot.offsetLeft + gap;

  // If placing it on the right would overflow the map…
  if (left + popupRect.width > mapWidth - gap) {
    // …flip it to the left side instead
    left = dot.offsetLeft - popupRect.width - gap;
  }

  /* ---------- Vertical positioning ---------- */

  // Default: vertically centre popup against the dot
  let top =
    dot.offsetTop +
    dot.offsetHeight / 2 -
    popupRect.height / 2;

    
if (window.innerWidth <= 576) {
  popup.style.top = `${dot.offsetTop + dot.offsetHeight + 16}px`;
}


  // Check if that position would overflow the map
  const overflowsBottom =
    top + popupRect.height > mapHeight - gap;

  const overflowsTop = top < gap;

  // If it would overflow top or bottom…
  if (overflowsBottom || overflowsTop) {
    // Measure available space above and below the dot
    const spaceAbove = dot.offsetTop;
    const spaceBelow =
      mapHeight - (dot.offsetTop + dot.offsetHeight);

    // Prefer placing above if there’s enough room
    if (spaceAbove >= popupRect.height + gap) {
      top = dot.offsetTop - popupRect.height - gap;
    }
    // Otherwise place below if possible
    else if (spaceBelow >= popupRect.height + gap) {
      top = dot.offsetTop + dot.offsetHeight + gap;
    }
  }

  // Final safety clamp to ensure popup remains inside the map
  top = Math.max(
    gap,
    Math.min(top, mapHeight - popupRect.height - gap)
  );

  // Apply the calculated position
  popup.style.left = `${left}px`;
  popup.style.top = `${top}px`;
}

/* ---------- Re-enable scroll closing AFTER scrolling stops ---------- */
function unlockScrollAfterStop(delay = 120) {
  let timer;

  // Function called on every scroll event
  function onScroll() {
    // Reset the timer each time scrolling occurs
    clearTimeout(timer);

    // When scrolling has stopped for `delay` ms…
    timer = setTimeout(() => {
      // Re-enable close-on-scroll
      ignoreNextScroll = false;

      // Remove this temporary scroll listener
      window.removeEventListener("scroll", onScroll);
    }, delay);
  }

  // Listen for scroll events while auto-scrolling
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Scroll viewport ONLY if popup is clipped ---------- */
function scrollViewportIfNeeded(popup, padding = 24) {
  // Get popup position relative to viewport
  const rect = popup.getBoundingClientRect();

  // Get height of the visible viewport
  const viewportHeight = window.innerHeight;

  // Amount we need to scroll (positive = down, negative = up)
  let scrollDelta = 0;

  // If popup bottom is below the viewport, scroll down
  if (rect.bottom > viewportHeight - padding) {
    scrollDelta = rect.bottom - viewportHeight + padding;
  }
  // If popup top is above the viewport, scroll up
  else if (rect.top < padding) {
    scrollDelta = rect.top - padding;
  }

  // Only scroll if adjustment is actually needed
  if (scrollDelta !== 0) {
    // Temporarily ignore scroll events caused by this scroll
    ignoreNextScroll = true;

    // Scroll the page smoothly by the required amount
    window.scrollBy({
      top: scrollDelta,
      behavior: "smooth"
    });

    // Re-enable close-on-scroll once scrolling finishes
    unlockScrollAfterStop();
  }
}

/* ---------- Handle dot click ---------- */
dots.forEach(dot => {
  dot.addEventListener("click", e => {
    // Prevent click from triggering click-away handler
    e.stopPropagation();

    // Find the popup linked to this dot
    const popup = document.getElementById(dot.dataset.popup);
    if (!popup) return;

    // Close any existing popup
    closeAllPopups();

    // Mark this dot and popup as active
    dot.classList.add("active");
    activeDot = dot;
    popup.classList.add("active");

    // Wait one frame so the popup has dimensions
    requestAnimationFrame(() => {
      // Position the popup correctly
      positionPopup(dot, popup);

      // Scroll viewport if popup is partially off-screen
      scrollViewportIfNeeded(popup);
    });
  });
});

/* ---------- Click away closes popup ---------- */
document.addEventListener("click", closeAllPopups);

/* ---------- User-initiated scroll closes popup ---------- */
window.addEventListener(
  "scroll",
  () => {
    // Ignore scrolls triggered by our own code
    if (ignoreNextScroll) return;

    // Close popup when user scrolls manually
    closeAllPopups();
  },
  { passive: true }
);
