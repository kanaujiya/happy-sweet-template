// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("closeicon");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
  });
});

closeIcon.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
});

// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// scroll up
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }

  scrollUpBtn.onclick = () => {
    window.scrollTo(0, 0);
  };
};

window.addEventListener("scroll", scrollUp);

// active menu

const activeLink = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    if (item.href.includes(current)) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", activeLink);

// change background header

const scrollHeader = () => {
  const navbar = document.getElementById("navbar");

  if (this.scrollY >= 200) {
    navbar.classList.add("shadow-myboxshadow");
  } else {
    navbar.classList.remove("shadow-myboxshadow");
  }
};

window.addEventListener("scroll", scrollHeader);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 300,
  reset: true,
});
sr.reveal(".hero_top , .ingredients_top , .blog_top, .blog_btn, .newsletter");
sr.reveal(".hero_image ,  .promo_image", { scale: 0.5 });
sr.reveal(".hero_outline_1", ".hero_outline_2", {
  scale: 0.5,
  distance: "0px",
  delay: 1000,
});
sr.reveal(".hero_leaf_1, .hero_leaf_2", {
  origin: "right",

  delay: 1500,
});
sr.reveal(".hero_leaf_3", {
  origin: "left",
  delay: 1500,
});
sr.reveal(".hero_leaf_4", {
  origin: "bottom",
  delay: 1500,
});
sr.reveal(".feature_left, .promo_content ", {
  origin: "left",
});
sr.reveal(".feature_right .ingredient_item_right", { origin: "right" });
sr.reveal(".ingredient_item_left", { origin: "left", interval: 100 });
sr.reveal(".ingredient_item_right", { origin: "right", interval: 100 });
sr.reveal(".flavor_item, .blog_item", { interval: 100 });
