document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll(".content");

  const revealOnScroll = () => {
      contents.forEach(content => {
          const contentTop = content.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

           
          if (contentTop < windowHeight * 0.7) {
              content.classList.add("reveal");
          }
      });
  };

   
  revealOnScroll();

   
  window.addEventListener("scroll", revealOnScroll);
});