// nav.js
const btn = document.querySelector('.hamburger');
const links = document.querySelector('nav .links');
if (btn && links) {
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Highlight active link
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav .links a').forEach(a => {
  const isActive = a.getAttribute('href') === here;
  if (isActive) a.classList.add('active');
});
