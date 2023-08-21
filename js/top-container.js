// Animation Typing Text
setTimeout(() => {
  const animText = new Typed('.animated-text', {
    strings: [
      'Front-end Developer',
      'Full-Stack Developer',
      'Back-end Developer',
    ],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 500,
    loop: true,
  });
}, 1000);

// Instagram Button
const button = document.getElementById('przejdzBtn');
button.addEventListener('click', () => {
  window.location.href = 'https://www.instagram.com/lukasz.321/';
});
