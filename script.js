document.querySelectorAll('.carousel-image').forEach(image => {
    image.addEventListener('click', function(){

        let zoomImages = document.querySelectorAll('.zoom-image');
        zoomImages.forEach(zoomImage => {
            zoomImage.src = this.src;
        });
        
    });
});

// document.addEventListener('DOMContentLoaded', function(){

// });