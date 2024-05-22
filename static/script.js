document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.event');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelector('.content').style.opacity = '1';
          observer.unobserve(entry.target);  // Optionally stop observing the element once it has animated
        }
      });
    });
  
    events.forEach(event => {
      observer.observe(event);
    });
  });
  