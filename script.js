// hamburger menu
const btnhamburger = document.querySelector('#btnhamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElms = document.querySelectorAll('.has-fade');
const menuLinks = document.querySelectorAll('.header_menu a');

btnhamburger.addEventListener('click', function () {
  console.log('click hamburger');

  if (header.classList.contains('open')) {
    header.classList.remove('open');
    fadeElms.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    header.classList.add('open');
    fadeElms.forEach(function (element) {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    });
  }
});

// Add event listeners to each link to close the overlay on click
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    header.classList.remove('open');
    fadeElms.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  });
});

//smooth scrolling when clicking anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//Testimonial Slider
const slider = tns({
  container: ".testimonials_slider1",
  loop: !0,
  items: 1,
  gutter: 20,
  slideBy: "page",
  nav: true,
  navPosition: "bottom",
  autoplay: true,
  speed: 800,
  autoplayButtonOutput: !1,
  preventScrollOnTouch: 'auto',
  mouseDrag: !0,
  controls: false,
  responsive: {
    640: {
      items:
        1
    },
    768: {
      items: 2,
      nav: false,
      speed: 1000,
      gutter: 20
    },
    1035: {
      items: 3,
      nav: false,
      speed: 1000,
      autoplayHoverPause: true,
      gutter: 20
    }
  }
});