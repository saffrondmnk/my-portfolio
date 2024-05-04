const carouselImage = document.querySelectorAll('.carousel-image');

carouselImage.forEach(image => {
    image.addEventListener('click', function() {

        let zoomImages = document.querySelectorAll('.zoom-image');
        zoomImages.forEach(zoomImage => {
            zoomImage.src = this.src;
        });
        
    });
});