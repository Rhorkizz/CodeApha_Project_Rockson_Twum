let isScrolling;
// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const galleryItems = document.querySelectorAll(".gallery-item");

  window.addEventListener("scroll", () => {
    window.cancelAnimationFrame(isScrolling);
    isScrolling = window.requestAnimationFrame(revealOnScroll);
});
  // Open lightbox and display clicked image
  galleryItems.forEach(item => {
      const image = item.querySelector(".gallery-image");
      const overlay = item.querySelector(".overlay");

      // Add click event to the image
      image.addEventListener("click", () => {
          lightbox.style.display = "block";
          lightboxImg.src = image.src;
      });

      // Add click event to the overlay
      overlay.addEventListener("click", () => {
          lightbox.style.display = "block";
          lightboxImg.src = image.src;
      });
  });

  // Close lightbox when clicking the close button
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
      if (e.target !== lightboxImg) {
          lightbox.style.display = "none";
      }
  });

  // Scroll Animation
  const revealOnScroll = () => {
      galleryItems.forEach(item => {
          const itemTop = item.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          // Reveal item when it's 80% in the viewport
          if (itemTop < windowHeight * 0.8) {
              item.classList.add("reveal");
          }
      });
  };

  // Debounce function to improve performance
  function debounce(func, wait = 10, immediate = true) {
      let timeout;
      return function () {
          const context = this, args = arguments;
          const later = function () {
              timeout = null;
              if (!immediate) func.apply(context, args);
          };
          const callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
      };
  }

  // Add scroll event listener with debouncing
  window.addEventListener("scroll", debounce(revealOnScroll));

  // Initial check in case items are already in view
  revealOnScroll();
});