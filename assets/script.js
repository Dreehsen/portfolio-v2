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
        blackElement.style.transition = "background-color 0.5s, box-shadow 0.5s";
      } else {
        blackElement.style.backgroundColor = "transparent";
        blackElement.style.boxShadow = "none";
        blackElement.style.transition = "background-color 0.5s, box-shadow 0.5s";
      }
    });
  });

//Animationer med Scrolltrigger

//Rotate

const animateRotate = gsap.utils.toArray('.animate-rotate');

if(animateRotate.length>0){
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
  
})}

//Opacity

const animateOpacity = gsap.utils.toArray('.animate-opacity');

if(animateOpacity.length>0){
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
  
})}

//Animate up


const animateUp = gsap.utils.toArray('.animate-up');

if(animateUp.length>0){
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
};

const animateUpSome = gsap.utils.toArray('.animate-up-some');

if(animateUpSome.length>0){
animateUpSome.forEach((animateUpSome) => {
  
  gsap.from(animateUpSome, { autoAlpha: 0,
    scrollTrigger: {
      trigger: animateUpSome,
    },
    y:50,
    delay: 1.5,
    ease: "power4.out",
    opacity: 0,
    duration: 1
});
  
})
};

//Flipcard stagger

const stagger = gsap.utils.toArray('.stagger');
  
if(stagger.length>0){
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
};

const helpItem = gsap.utils.toArray('.help-item');
  
if(helpItem.length>0){
  gsap.from(helpItem, { autoAlpha: 0,
    scrollTrigger: {
      trigger: helpItem,
    },
    y:200,
    stagger: 0.1,
    rotate: 90,
    ease: "elastic.out(1,1.5)",
    opacity: 0,
    duration: 1.2,
});
};

const animateHero = gsap.utils.toArray('.animate-hero');
  
if(animateHero.length>0){
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
};

const animateHeroSingleCase = gsap.utils.toArray('.animate-hero-single-case');
  
if(animateHeroSingleCase.length>0){
  gsap.from(animateHeroSingleCase, { autoAlpha: 0,
    scrollTrigger: {
      trigger: animateHeroSingleCase,
    },
    stagger: 0.15,
    opacity: 0,
    duration: 1.2
});
}

const animateFromRight = gsap.utils.toArray('.animate-from-right');

if(animateFromRight.length>0){
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
};

//Smooth scroll med Lenis

const lenis = new Lenis()

lenis.on('scroll', (e) => {

})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tabName).style.display = "block";  
}