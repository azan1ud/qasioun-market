// ========================================
// Supermarket Template - Scripts
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Mobile Nav Toggle ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // ---------- Scroll Animations ----------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  const animateElements = document.querySelectorAll(
    '.category-card, .offer-card, .step-card, .delivery-card, .about-content, .about-images, .location-detail, .cta-content'
  );

  animateElements.forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    observer.observe(el);
  });

  // ---------- Smooth Scroll ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---------- Add to Order Buttons (Demo) ----------
  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', function () {
      const original = this.textContent;
      this.textContent = 'Added!';
      this.style.background = 'var(--accent)';
      this.style.color = '#fff';
      setTimeout(() => {
        this.textContent = original;
        this.style.background = '';
        this.style.color = '';
      }, 1500);
    });
  });

});
