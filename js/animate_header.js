const clickBox = document.querySelector('.box-hamburger');
const mainSection = document.querySelector('.main-section');
const textNavigate = document.querySelector('.text-navigate');
const navigateSec = document.querySelector('.section-navigate');
const listItem = document.querySelector(
  '.main-section .section-navigate .navigate-box ul'
);
const TextHide = document.querySelector('.text-navigate');

function handleClick() {
  navigateSec.classList.toggle('hide');
  navigateSec.classList.toggle('show');
  if (navigateSec.classList.contains('show')) {
    navigateSec.style.display = 'flex';
    TextHide.style.animation = 'fadeOut 0.5s ease 0s 1 forwards';
  } else {
    setTimeout(() => {
      TextHide.style.animation = 'fadeIn 0.5s ease 0s 1 forwards';
    }, 100);
  }
}

const BurgerIcon = document.querySelector('.hamburger-menu');

BurgerIcon.addEventListener('click', function () {
  BurgerIcon.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 476) {
    if (navigateSec.classList.contains('hide')) {
      navigateSec.style.display = 'none';
    }
  } else {
    navigateSec.style.display = 'flex';
    navigateSec.classList.add('hide');
    navigateSec.classList.remove('show');
  }
});

clickBox.addEventListener('click', handleClick);

const liElements = document.querySelectorAll('.navigate-box nav ul li');

liElements.forEach((li) => {
  li.addEventListener('mouseover', () => {
    if (window.innerWidth < 476) {
      li.querySelector('a').classList.add('mouseover-animate');
    } else {
      li.querySelector('a').classList.add('mouseover-animate-two');
    }
    li.classList.add('hovered');
  });

  li.addEventListener('mouseout', () => {
    if (window.innerWidth < 476) {
      li.querySelector('a').classList.remove('mouseover-animate');
    } else {
      li.querySelector('a').classList.remove('mouseover-animate-two');
    }
    li.classList.remove('hovered');
  });
});

window.addEventListener('scroll', function () {
  var mainSection = document.querySelector('.main-section');
  var scrollHeight = window.innerHeight;

  if (window.pageYOffset >= scrollHeight) {
    mainSection.classList.add('fixed');
  } else {
    mainSection.classList.remove('fixed');
  }
});
