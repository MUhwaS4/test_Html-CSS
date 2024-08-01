// ScrollMagic :: 스킬 리스트, 연락처

let spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

spyEls.forEach(function (spyE1) {
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyE1, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시 (0~1 사이 지정)
  })
  .setClassToggle(spyE1,"show") //  요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller());
});

// ScrollMagic :: 자기소개

let spyEls2 = document.querySelectorAll('.scroll-spy-how');
console.log(spyEls2);

spyEls2.forEach(function (spyE12) {
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyE12, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시 (0~1 사이 지정)
  })
  .setClassToggle(spyE12,"show") //  요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller());
});

// 메뉴 :: 오퍼시티

window.onscroll = function() {adjustHeaderOpacity()};

function adjustHeaderOpacity() {
  var header = document.querySelector("header");
  
  if (window.scrollY > 100) {
    header.style.opacity = "0";
  } else {
    header.style.opacity = "1";
  }
}

document.querySelector("header").addEventListener("mouseover", function() {
  this.style.opacity = "1";
});

document.querySelector("header").addEventListener("mouseout", function() {
  if (window.scrollY > 100) {
    this.style.opacity = "0";
  }
});

// 현재 연도 표시

new Date().getFullYear(); 
console.log(new Date().getFullYear());

let thisYear = document.querySelector('.this_year');
thisYear.textContent = new Date().getFullYear();

// 모달: 자격증 띄우기

let modalEl = document.querySelector('#modal-about');
let modalBtn = document.querySelectorAll('.about_warpper .btn-info');
let closeBtn = document.querySelector('#modal-about .btn-close');
console.log(modalBtn);
console.log(modalBtn[0]);
console.log(modalBtn[1]);

modalBtn[0].addEventListener('click', function () {
  modalEl.style.display = 'flex';
});

closeBtn.addEventListener('click', function () {
  modalEl.style.display = 'none';
}
);

// 모달: 포트폴리오 열고 닫는 버튼

function showModal(modalId) {
  var modal = document.querySelector(modalId);
  modal.style.display = "block";
  setTimeout(function() {
    modal.classList.add('show');
  }, 10);
}

function hideModal(modalId) {
  var modal = document.querySelector(modalId);
  modal.classList.remove('show');
  setTimeout(function() {
    modal.style.display = "none";
  });
}

// 모달: 사진 슬라이드쇼 1

var slideIndex_1 = 1;
showSlides_1(slideIndex_1);

// 다음, 이전 제어
function plusSlides_1(n) {
  showSlides_1(slideIndex_1 += n);
}

// 사진 제어
function currentSlide(n) {
  showSlides_1(slideIndex_1 = n);
}

function showSlides_1(n) {
  var i;
  var slides = document.getElementsByClassName("mySl-mo-1");
  var dots = document.getElementsByClassName("dot-mo-1");
  if (n > slides.length) {slideIndex_1 = 1} 
  if (n < 1) {slideIndex_1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_1-1].style.display = "block"; 
  dots[slideIndex_1-1].className += " active";
}

// 모달: 사진 슬라이드쇼 2

var slideIndex_2 = 1;
showSlides_2(slideIndex_2);

// 다음, 이전 제어
function plusSlides_2(n) {
  showSlides_2(slideIndex_2+= n);
}

// 사진 제어
function currentSlide(n) {
  showSlides_2(slideIndex_2 = n);
}

function showSlides_2(n) {
  var i;
  var slides = document.getElementsByClassName("mySl-mo-2");
  var dots = document.getElementsByClassName("dot-mo-2");
  if (n > slides.length) {slideIndex_2 = 1} 
  if (n < 1) {slideIndex_2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_2-1].style.display = "block"; 
  dots[slideIndex_2-1].className += " active";
}

// 모달: 사진 슬라이드쇼 3

var slideIndex_3 = 1;
showSlides_3(slideIndex_3);

// 다음, 이전 제어
function plusSlides_3(n) {
  showSlides_3(slideIndex_3+= n);
}

// 사진 제어
function currentSlide(n) {
  showSlides_3(slideIndex_3 = n);
}

function showSlides_3(n) {
  var i;
  var slides = document.getElementsByClassName("mySl-mo-3");
  var dots = document.getElementsByClassName("dot-mo-3");
  if (n > slides.length) {slideIndex_3 = 1} 
  if (n < 1) {slideIndex_3 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_3-1].style.display = "block"; 
  dots[slideIndex_3-1].className += " active";
}

// 페이지 최상단으로 이동

let toTopBtn = document.querySelector('#to-top');

// 페이지에 스크롤 이벤트 감지를 추가
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  console.log(window.scrollY); // Y축 스크롤 위치 확인

  // 페이지 스크롤 위치가 500px을 넘으면 요소를 보여주고,
  // 500px을 넘지 않으면 요소 숨기기

  if (scrollY > 500) {
    toTopBtn.style.opacity = '1'
    toTopBtn.style.transform = 'translateX(0)';
  } else {
    toTopBtn.style.opacity = '0'
    toTopBtn.style.transform = 'translateX(100px)';
  }
});