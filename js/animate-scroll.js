// Scroll Element List

// Element Click
const clickMainScroll = document.getElementById('clickHome');
const clickProjectScroll = document.getElementById('clickProject');
// End Element Click

// Element Click To Scroll
const scrollToProject = document.getElementById('section-project');
// End Element Click To Scroll

// Animation Scroll
clickMainScroll.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

clickProjectScroll.addEventListener('click', () => {
  scrollToProject.scrollIntoView({ behavior: 'smooth' });
});
// End Animation Scroll
// End Scroll Element lIST

// Active Element List
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4,
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

const elementIds = ['section-project', 'section-home'];

elementIds.forEach((elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    observer.observe(element);
  }
});

function handleVisibleElement(elementId) {
  const currentElement = document.getElementsByClassName(elementId)[0];
  currentElement.classList.add('active');
}

function handleInvisibleElement(elementId) {
  const currentElement = document.getElementsByClassName(elementId)[0];
  currentElement.classList.remove('active');
}

// End Active Element List
