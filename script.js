// Add a smooth scrolling effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a simple lightbox for project images
const projectImages = document.querySelectorAll('.project img');

projectImages.forEach(image => {
    image.addEventListener('click', function () {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);

        const enlargedImage = document.createElement('img');
        enlargedImage.src = this.src;
        enlargedImage.className = 'enlarged-image';
        overlay.appendChild(enlargedImage);

        overlay.addEventListener('click', function () {
            document.body.removeChild(overlay);
        });
    });
});
