const carouselImage = document.querySelectorAll('.carousel-image');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');


// highlight navbar when clicked
// navLinks.forEach(link => {
//     link.addEventListener('click', function(e) {
//         const activeLink = document.querySelector('.navbar-nav .nav-link.active');
//         console.log(e.target);
//         // console.log(activeLink);
//         if(activeLink){
//             activeLink.classList.remove('active');
//         }

//         this.classList.add('active');
//     });
// });

// highligt navbar when scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
    
        const section = document.getElementById(sectionId);
    
        const sectionTop = section.offsetTop;
    
        // const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;
        console.log('sectionTop:', sectionTop,'scrollPosition:', scrollPosition);

        // if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        //     link.classList.add('active');
        // } else {
        //     link.classList.remove('active');
        // }

        if (scrollPosition >= sectionTop -1 && scrollPosition <= sectionBottom - 1  ) {
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