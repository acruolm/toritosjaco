  document.addEventListener('DOMContentLoaded', function () {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
      observer.observe(item);
    });
  });
