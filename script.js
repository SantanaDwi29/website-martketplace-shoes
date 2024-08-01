document.addEventListener('DOMContentLoaded', function() {
    const feBoxes = document.querySelectorAll('.fe-box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry);  // Tambahkan log untuk debugging
            if (entry.isIntersecting) {
                console.log('Element is intersecting:', entry.target);  // Log elemen yang terlihat
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    feBoxes.forEach(box => {
        observer.observe(box);
    });

    console.log('IntersectionObserver has been set up.');
});
