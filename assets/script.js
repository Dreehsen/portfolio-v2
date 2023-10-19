
// Burgermenu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Sticky-nav med farve-transition on scroll

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      let scroll = window.scrollY;
      let blackElement = document.querySelector(".navbar");
      
      if (scroll > 70) {
        blackElement.style.backgroundColor = "var(--background)";
        blackElement.style.boxShadow = "20px 20px 60px #050d19";
        blackElement.style.transition = "background-color 0.5s, box-shadow 0.5s"; // Add transitions
      } else {
        blackElement.style.backgroundColor = "transparent";
        blackElement.style.boxShadow = "none";
        blackElement.style.transition = "background-color 0.5s, box-shadow 0.5s";
      }
    });
  });

//Animationer med Scrolltrigger

//Rotate

let animateRotate = gsap.utils.toArray('.animate-rotate');

animateRotate.forEach((animateRotate) => {
  
  gsap.from(animateRotate, { autoAlpha: 0,
    scrollTrigger: {
      trigger: animateRotate,
    },
    y:200,
    rotation: 160,
    ease: "power1.out",
    opacity: 0,
    duration: 1
});
  
})

//Opacity

let animateOpacity = gsap.utils.toArray('.animate-opacity');

animateOpacity.forEach((animateOpacity) => {
  
  gsap.from(animateOpacity, { autoAlpha: 0,
    scrollTrigger: {
      trigger: animateOpacity,
    },
    ease: "power1.out",
    opacity: 0,
    duration: 1,
    ease: "power2.out",
});
  
})

//Animate up

let animateUp = gsap.utils.toArray('.animate-up');

animateUp.forEach((animateUp) => {
  
  gsap.from(animateUp, { autoAlpha: 0,
    scrollTrigger: {
      trigger: animateUp,
    },
    y:150,
    ease: "power4.out",
    opacity: 0,
    duration: 1.5
});
  
})

let animateUpSome = gsap.utils.toArray('.animate-up-some');

animateUpSome.forEach((animateUpSome) => {
  
  gsap.from(animateUpSome, { autoAlpha: 0,
    scrollTrigger: {
      trigger: animateUpSome,
    },
    y:150,
    delay: 1.5,
    ease: "power4.out",
    opacity: 0,
    duration: 1
});
  
})

//Flipcard stagger

let stagger = gsap.utils.toArray('.flip-card');
  
  gsap.from(stagger, { autoAlpha: 0,
    scrollTrigger: {
      trigger: stagger,
    },
    y:200,
    stagger: 0.1,
    rotate: 90,
    ease: "elastic.out(1,1.5)",
    opacity: 0,
    duration: 1.2,
});

let animateHero = gsap.utils.toArray('.animate-hero');
  
  gsap.from(animateHero, { autoAlpha: 0,
    scrollTrigger: {
      trigger: animateHero,
    },
    delay: 0.2,
    x: -1000,
    stagger: 0.15,
    opacity: 0,
    duration: 1
});

let animateHeroSingleCase = gsap.utils.toArray('.animate-hero-single-case');
  
  gsap.from(animateHeroSingleCase, { autoAlpha: 0,
    scrollTrigger: {
      trigger: animateHeroSingleCase,
    },
    stagger: 0.15,
    opacity: 0,
    duration: 1.2
});

let animateFromRight = gsap.utils.toArray('.animate-from-right');

animateFromRight.forEach((animateFromRight) => {
  
  gsap.from(animateFromRight, { autoAlpha: 0,
    scrollTrigger: {
      trigger: animateFromRight,
    },
    x:1000,
    y: -150,
    rotate: -80,
    ease: "power4.out",
    opacity: 0,
    duration: 1.5
});
  
})

//Smooth scroll med lenis

const lenis = new Lenis()

lenis.on('scroll', (e) => {

})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)