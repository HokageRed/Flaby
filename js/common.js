$(document).ready(function(){
  $('.keks').slick({
    slidesToShow: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.slick-next').html('<span style="margin: 0 15px;font-size:18px">Next</span><i class="fas fa-arrow-right"></i>');
  $('.slick-prev').html('<i class="fas fa-arrow-left"></i><span style="margin: 0 15px;font-size:18px">Previous</span>');
  $('.rel').prepend('<div class="obl" style="z-index: 6;opacity: 0.60;background: #fff;position: absolute;margin: 7% 11%;height: 73%;width: 77%;border: #7c7c7c 1px solid;border-radius: 20px;box-shadow: 0 0 30px rgba(0,0,0,0.5);"></div><div class="obl2" style="z-index: 2;opacity: 0.40;background: #fff;position: absolute;margin: 8% 9%;height: 68%;width: 81%;border: #7c7c7c 1px solid;border-radius: 20px;box-shadow: 0 0 30px rgba(0,0,0,0.5);"></div>');
});
