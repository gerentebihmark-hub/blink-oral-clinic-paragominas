document.querySelectorAll('[data-wa]').forEach(link => {
  link.href = 'https://wa.me/5591993014679?text=' + encodeURIComponent(link.dataset.wa);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
const lpLink = document.getElementById('lp-link');
const lpUrl = import.meta.env.VITE_LP_URL;
if (lpUrl) {
  lpLink.href = lpUrl;
}
const track = document.querySelector('.carousel-track');
const slides = [...document.querySelectorAll('.carousel-slide')];
const dots = [...document.querySelectorAll('.carousel-dot')];
let index = 0;
function showSlide(next) {
  index = (next + slides.length) % slides.length;
  track.style.transform = 'translateX(-' + index * 100 + '%)';
  dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === index)));
}
document.querySelector('.carousel-nav.prev').addEventListener('click', () => showSlide(index - 1));
document.querySelector('.carousel-nav.next').addEventListener('click', () => showSlide(index + 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));
let touchX = 0;
let touchY = 0;
track.addEventListener('touchstart', e => {
  touchX = e.changedTouches[0].clientX;
  touchY = e.changedTouches[0].clientY;
}, { passive: true });
track.addEventListener('touchend', e => {
  const deltaX = e.changedTouches[0].clientX - touchX;
  const deltaY = e.changedTouches[0].clientY - touchY;
  if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
    showSlide(index + (deltaX < 0 ? 1 : -1));
  }
}, { passive: true });
document.querySelectorAll('[data-dialog]').forEach(button => {
  button.addEventListener('click', () => document.getElementById(button.dataset.dialog).showModal());
});
document.querySelectorAll('.legal-modal').forEach(dialog => {
  dialog.querySelectorAll('.modal-close,.modal-confirm').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
});

