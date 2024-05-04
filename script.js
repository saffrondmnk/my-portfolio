const carouselImage = document.querySelectorAll('.carousel-image');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// highligt navbar when scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        console.log(section);
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // console.log('sectionTop: ',sectionTop, 'sectionBottom: ', sectionBottom, 'scrollPosition: ', scrollPosition);

        if (scrollPosition >= sectionTop - 1 && scrollPosition <= sectionBottom - 1  ) {
            // add class "active" for navigate
            link.classList.add('active');
        } else {
            // delete class active 
            link.classList.remove('active');
        }

    });
});


// zoom image when clicked
carouselImage.forEach(image => {
    image.addEventListener('click', function() {

        let zoomImages = document.querySelectorAll('.zoom-image');
        zoomImages.forEach(zoomImage => {
            zoomImage.src = this.src;
        });
        
    });
});