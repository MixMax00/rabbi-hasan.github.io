



$(document).ready(function () {
    

    $('#app nav ul li a[href="' + page + '"]').addClass('beactive');


    




    $('#circle1').circleProgress({
     value: 0.95,
      size: 100,
      fill: {
        gradient: ["red", "orange"]
      }
    });

    $('#circle2').circleProgress({
     value: 0.90,
      size: 100,
      fill: {
        gradient: ["red", "yellow"]
      }
    });

    $('#circle3').circleProgress({
     value: 0.70,
      size: 100,
      fill: {
        gradient: ["red", "green"]
      }
    });

    $('#circle4').circleProgress({
     value: 0.80,
      size: 100,
      fill: {
        gradient: ["red", "blue"]
      }
    });

    $('#circle5').circleProgress({
     value: 0.75,
      size: 100,
      fill: {
        gradient: ["red", "black"]
      }
    });

    $('#circle6').circleProgress({
     value: 0.70,
      size: 100,
      fill: {
        gradient: ["red", "tomato"]
      }
    });
      
    $('#circle7').circleProgress({
     value: 0.75,
      size: 100,
      fill: {
        gradient: ["red", "purple"]
      }
    });

    $('#circle8').circleProgress({
     value: 0.80,
      size: 100,
      fill: {
        gradient: ["red", "black"]
      }
    });
});




$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var stikyDiv = $('.nav-stick').position();

  if (scroll >= stikyDiv.top) {
      $('.nav-stick').css({
          'position': 'fixed',
          'top': '0px',
          'width':'100%',
          'background':'#ffffff',
          'box-shadow':'0px 0px 3px #333',
          'z-index': 99,
      
      });
    } else {
      $('.nav-stick').css({
          'position': 'relative',
          'top': '0px',

      });
  };
   
  
});
