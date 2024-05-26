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


    const timeline = document.querySelector('.timeline');
    const n = 5; // Number of sections

    for (let i = 0; i < n; i++) {
        const section = document.createElement('div');
        section.classList.add('timeline-section');
        section.style.width = `${100 / n}%`; // Dynamically set the width of each section
        timeline.appendChild(section);
    }


    window.addEventListener('scroll', function () {
        const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    });

});


