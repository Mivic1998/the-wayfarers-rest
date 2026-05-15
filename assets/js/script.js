
// Wait until the DOM is fully loaded before querying elements
document.addEventListener("DOMContentLoaded", () => {

  // Select all elements that should animate into view.
  // This includes both primary and secondary reveal styles.
  const revealElements = document.querySelectorAll(".reveal, .reveal-sub, .tablet-mobile-reveal");

  // Create a new IntersectionObserver instance.
  // The browser will call this callback whenever observed
  // elements enter or leave the viewport.
  const observer = new IntersectionObserver(

    // Callback function executed when visibility changes
    (entries, observer) => {

      // Loop over each observed visibility change
      entries.forEach(entry => {

        // Check if the element is currently intersecting
        // (i.e. visible in the viewport)
        if (entry.isIntersecting) {

          // Add the "visible" class to trigger CSS transitions
          entry.target.classList.add("visible");

          // Stop observing this element so the animation
          // only runs once
          observer.unobserve(entry.target);
        }
      });
    },

    // Observer options
    {
      // Threshold defines how much of the element must be visible
      // before the callback runs.
      // 0.15 = 15% of the element is in view
      threshold: 0.15
    }
  );

  // Attach the observer to each reveal element
  revealElements.forEach(el => observer.observe(el));
});

/* =========================
   MAP POPUP LOGIC
   ========================= */

// Select all map dots (the clickable markers)
const dots = document.querySelectorAll(".map-dot");

// Select all popup panels
const popups = document.querySelectorAll(".tavern-popup");

// Track which dot is currently active (if any) used in close all pop ups function//
let activeDot = null;

/* Flag used to ignore scroll events triggered by our own auto-scrolling,
used in nested function in scrollViewPortIfNeeded function
(sets it to true) which scrolls to the pop-up if it
is out of frame which sets it to false when there is a delay in scrolling after
auto scrolling is executed by scrollViewPort if needed, scroll listener will not
execute pop up close when the flag is set to true. */


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
  const map = document.querySelector(".map-wrapper");

  // Gap between dot and popup so they don’t touch visually
  const gap = 16;

  // Get map dimensions
  const mapWidth = map.offsetWidth;

  // Measure popup size (after it becomes visible)
  const popupRect = popup.getBoundingClientRect();

  /* ---------- Horizontal positioning ---------- */

  // Default: place popup to the right of the dot
  let left = dot.offsetLeft + gap;

  // If placing it on the right would overflow the map…
  if (left + popupRect.width > mapWidth - gap) {
    // …flip it to the left side instead
    left = dot.offsetLeft - popupRect.width - 2*gap;
  }

//vertically centre popup against the dot
  let top =
    dot.offsetTop +
    dot.offsetHeight / 2 -
    popupRect.height / 2;

  // Apply the calculated position
  popup.style.left = `${left}px`;
  popup.style.top = `${top}px`;
}

/* ---------- Re-enable scroll closing AFTER scrolling stops ----------
used in the scrollViewportIfNeeded function */
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

   

    
// If clicking the same dot, just close everything and stop
    if (activeDot === dot) {
      closeAllPopups();
      return;
    }

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


window.addEventListener(
  "touchmove",
  () => {
    if (ignoreNextScroll) return;
    closeAllPopups();
  },
  { passive: true }
);

