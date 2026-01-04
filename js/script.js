const galleryImage = document.querySelectorAll('.gallery-img');
galleryImage.forEach((img, i) => {
img.dataset.aos = 'fade-down';
img.dataset.aosDelay = i * 100;
img.dataset.aosDuration = 1000;
});

AOS.init({
once: true,
});


 document.addEventListener("DOMContentLoaded", (event) => {
      gsap.from('.jumbotron img', { duration: 2, y: '-50%', ease:'bounce({strength:0.8, endAtStart:true})' });
      gsap.from('.navbar', { duration: 2, y: '-100%', opacity: 0, ease: 'bounce({strength:0.7, endAtStart:true})' });
 });


