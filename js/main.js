$(function(){
    $('.header-slider').slick({
        dots:true,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
        fade:true,
        responsive:[{
          breakpoint: 371,
          settings:{
           dots: false,
           arrows: false,
           autoplay: true,
           autoplaySpeed: 2000, 
          }        
        }   
      ]
    });

$('.product__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,      // всегда вертикальный
    centerMode: true,
    arrows: true,        // стрелки всегда
    dots: false,         // точки убраны
    prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.png" alt="Назад"></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/product-next.png" alt="Вперёд"></button>',
    responsive: []       // пустой массив — настройки одинаковы для всех экранов
});



      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false

      });

      $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
      });
       
});

// Открыть модалку по любой кнопке с классом .openModalBtn
document.querySelectorAll(".openModalBtn").forEach(function(button){
  button.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("modal").style.display = "flex";
  });
});

// Закрыть модалку по крестику
document.getElementById("closeModal").addEventListener("click", function(){
  document.getElementById("modal").style.display = "none";
});

// Закрыть по клику вне окна
window.addEventListener("click", function(e){
  if(e.target.id === "modal"){
    document.getElementById("modal").style.display = "none";
  }
});

