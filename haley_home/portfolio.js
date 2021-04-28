/* HEADER */
window.onload = function () {
  scrollFunction();
};
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var header = document.getElementById("header");

  if (document.documentElement.scrollTop > 70) {
    if (!header.classList.contains("navbar-fixed")) {
      header.classList.add("navbar-fixed");
      document.getElementsByTagName("body")[0].style.marginTop = "70px";
      header.style.display = "none";
      setTimeout(function () {
        header.style.display = "block";
      }, 40);
    }
  } else {
    if (header.classList.contains("navbar-fixed")) {
      header.classList.remove("navbar-fixed");
      document.getElementsByTagName("body")[0].style.marginTop = "0";
    }
  }
}

function menuToggle() {
  document.getElementById("menu").classList.toggle("show");
}

document.getElementById("toggleBtn").addEventListener("click", menuToggle);

/*welcome area*/

var imageSlideIndex = 1;

showImageSlides(imageSlideIndex);

//이미지 슬라이드 타이머 
function imageSlideTimer(){
  plusImageSlides(1);
}
var imageTimer=setInterval(imageSlideTimer,3000); //초설정


function plusImageSlides(n){
  clearInterval(imageTimer);
  imageTimer =setInterval(imageSlideTimer,3000);
  showImageSlides(imageSlideIndex += n);
}
function currentImageSlide(n){
  clearInterval(imageTimer);
  imageTimer =setInterval(imageSlideTimer,3000);
  showImageSlides(imageSlideIndex = n);


}
function showImageSlides(n) {
  var i;
  var slides = document.getElementsByClassName("image-slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    imageSlideIndex = 1
  }
  if (n < 1) {
    imageSlideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[imageSlideIndex - 1].style.display = "block";
  dots[imageSlideIndex - 1].className += " active";
}
//옆으로 누르기 했을때 넘어가는 터치리스너
document.getElementById('imagePrev').addEventListener('click',plusImageSlides.bind(null,-1));
document.getElementById('imageNext').addEventListener('click',plusImageSlides.bind(null,1));
//닷 누르기 했을때 넘어가는 터치리스너 
document.getElementById('firstDot').addEventListener('click',currentImageSlide.bind(null,1));
document.getElementById('secondDot').addEventListener('click',currentImageSlide.bind(null,2));
document.getElementById('thirdDot').addEventListener('click',currentImageSlide.bind(null,3));
document.getElementById('forthDot').addEventListener('click',currentImageSlide.bind(null,4));