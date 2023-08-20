// Scroll Element List
const clickMainScroll = document.getElementById('section-home');
const clickProjectScroll = document.getElementById('section-project');
const clickPortfolioScroll = document.getElementById('section-portfolio');
const clickBlogScroll = document.getElementById('section-blog');
const clickContactScroll = document.getElementById('section-contact');

const scrollToProject = document.getElementById('projectScroll');
const scrollToPortfolio = document.getElementById('');
const scrollToBlog = document.getElementById('');
const scrollToContact = document.getElementById('');

clickMainScroll.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

clickProjectScroll.addEventListener('click', () => {
  scrollToProject.scrollIntoView({ behavior: 'smooth' });
});
// End Scroll Element lIST

// Active Element List
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const elementId = entry.target.getAttribute('id'); // Pobieranie ID sekcji

    if (entry.isIntersecting) {
      handleVisibleElement(elementId);
    } else {
      handleInvisibleElement(elementId);
    }
  });
}, options);

const elementIds = [
  'section-home',
  'section-project',
  'section-portfolio',
  'section-blog',
  'section-contact',
];

elementIds.forEach((elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    observer.observe(element);
  }
});

function handleVisibleElement(elementId) {
  elementId.classList.add('active');
}

function handleInvisibleElement(elementId) {
  elementId.classList.remove('active');
}

// End Active Element List
