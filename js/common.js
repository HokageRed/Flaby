$(document).ready(function(){
  $('.keks').slick({
    slidesToShow: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.slick-next').html('<span style="margin: 0 15px;font-size:18px">Next</span><i class="fas fa-arrow-right"></i>');
  $('.slick-prev').html('<i class="fas fa-arrow-left"></i><span style="margin: 0 15px;font-size:18px">Previous</span>');
  $('.idea-mob-slide').slick({
    slidesToShow:3,
    arrows: false,
      responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 536,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
  });
});

