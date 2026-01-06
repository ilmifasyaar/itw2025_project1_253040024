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

// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzuPoIZr5arKQyNscCw6qEQ3hasjXxloBr26_jlcMmgNmFEN-hRyLv6BEWbDKa2mPs9CQ/exec'
const form = document.forms['Contact-form-Porto']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
e.preventDefault()

btnLoading.classList.toggle('d-none');
btnKirim.classList.toggle('d-none');
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
     btnLoading.classList.toggle('d-none');
     btnKirim.classList.toggle('d-none');
     myAlert.classList.toggle('d-none');
     form.reset();
     console.log('Success!', response)
})
.catch(error => console.error('Error!', error.message))
})
