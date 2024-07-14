// script.js

// Hero Section Animation
const hero = document.querySelector('.hero');
hero.addEventListener('animationend', () => {
  hero.classList.add('animate-in');
});

// Features Section Animation
const features = document.querySelectorAll('.features li');
features.forEach((feature) => {
  feature.addEventListener('mouseover', () => {
    feature.classList.add('animate-in');
  });
  feature.addEventListener('mouseout', () => {
    feature.classList.remove('animate-in');
  });
});

// Testimonials Section Animation
const testimonials = document.querySelectorAll('.testimonials li');
testimonials.forEach((testimonial) => {
  testimonial.addEventListener('mouseover', () => {
    testimonial.classList.add('animate-in');
  });
  testimonial.addEventListener('mouseout', () => {
    testimonial.classList.remove('animate-in');
  });
});

// Call-to-Action Button Animation
const ctaButton = document.querySelector('.cta .cta');
ctaButton.addEventListener('mouseover', () => {
  ctaButton.classList.add('animate-in');
});
ctaButton.addEventListener('mouseout', () => {
  ctaButton.classList.remove('animate-in');
});

// Scroll-to-Top Button
const scrollTopButton = document.querySelector('.scroll-to-top');
scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// script.js

// Scroll-based Animations
const scrollAnimations = document.querySelectorAll('.scroll-animation');
scrollAnimations.forEach((animation) => {
  const animationOffset = animation.offsetTop;
  const animationHeight = animation.offsetHeight;
  const windowHeight = window.innerHeight;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > animationOffset - windowHeight && scrollPosition < animationOffset + animationHeight) {
      animation.classList.add('animate-in');
    } else {
      animation.classList.remove('animate-in');
    }
  });
});

// Parallax Effect
const parallaxElements = document.querySelectorAll('.parallax');
parallaxElements.forEach((element) => {
  const parallaxSpeed = element.getAttribute('data-parallax-speed');
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    element.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
  });
});

// Lazy Loading
const lazyImages = document.querySelectorAll('.lazy');
lazyImages.forEach((image) => {
  const imageSrc = image.getAttribute('data-src');
  const imageOffset = image.offsetTop;
  const windowHeight = window.innerHeight;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > imageOffset - windowHeight) {
      image.src = imageSrc;
      image.classList.remove('lazy');
    }
  });
});

// Mobile Navigation
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

mobileNavToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});