document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('#product1 .pro, #feature .fe-box, #sm-banner .banner-box,#banner3 .banner-box');

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', checkBoxes);
    checkBoxes(); 
});
