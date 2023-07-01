const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

// Initial slide display
showSlide(currentSlideIndex);

// Change slide every 3 seconds
setInterval(nextSlide, 2000);
let lo=document.getElementById("login");
lo.addEventListener("click" , alert("login is not working yet  Soory for inconvience"));
