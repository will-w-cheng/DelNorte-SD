document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.event');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.content').style.opacity = '1';
                entry.target.querySelector('.content').style.color = '#0000FF';
            } else {
                entry.target.querySelector('.content').style.opacity = '0.5'; // Change back to original opacity
                entry.target.querySelector('.content').style.color = '#FFFFFF'; // Change back to original color
            }
        });
    });
  
    events.forEach(event => {
        observer.observe(event);
    });
});
