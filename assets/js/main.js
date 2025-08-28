// إظهار العناصر عند التمرير
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card, .testimonial, .fade-up').forEach(el => io.observe(el));
  // تأخير بسيط لعناصر النافبار (اختياري)
  document.querySelectorAll('.nav-links a, .btn-login').forEach((el,i)=>{
    el.style.animationDelay = (i*0.06)+'s';
    el.classList.add('animate-in');
  });
});
