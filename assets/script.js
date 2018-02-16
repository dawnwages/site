
var ballCount = 50;
var ballMinSize = 40;
var ballMaxSize = 100;

var container = $("#ballBox");


$(document).ready(function(){
  $('.collapsible').collapsible();
});

$(document).ready(function(){
  $('.carousel').carousel();
});

$(document).ready(function() {
   $('#tools-text , #PD-text').css('display', 'none');

    $("#aboutme").on("click", function(){
        $("#about-text").fadeToggle('slow');
      })
      
      $("#tools").on("click", function(){
        $("#tools-text").fadeToggle('slow');
      })
      
      $("#Education").on("click", function(){
        $("#edu-text").fadeToggle("slow");
      })
      
      $("#PD").on("click", function(){
        $("#PD-text").fadeToggle("slow");
      })

  });

AOS.init({
  duration: 1200,
})



$(function () {
  $(document).scroll(function () {
    var $nav = $("#navName");
    var $me = $("#me");
	  $nav.toggleClass('text-scrolled', $(this).scrollTop() > $me.height());
    $me.toggleClass('me-scrolled', $(this).scrollTop() > $me.height());
  });
});


$(function() {
  initBalls();
  console.log("Balls Initiated");
  //moveBalls();
  balls = window.setInterval(moveBalls,100); //24 FPS
  $(window).resize(function() { 
    moveBallsIntoBounds(); 
  });
console.log("moved balls");
});


// function moveBallsIntoBounds() {

// }

function rand(min,max,isInt) {
  var min = min || 0,
      max = max || 1,
      isInt = isInt || false,
      num = Math.random()*(max - min) + min;
  return (isInt) ? Math.round(num) : num;
}


// //create the balls that you want to display
function initBalls() {
  for (i=0; i < ballCount; i++) {
    var newBall = $('<div>').addClass('ball');
    $('#first-div').append(newBall);
    size = rand(ballMinSize,ballMaxSize);
    // size = Math.floor((Math.random() * ballMaxSize)+ ballMinSize);
    newBall.css({
      'position':'absolute',
      'width': size+'px',
      'height': size+'px',
      'opacity': rand(.1,.6),
      'background-color': 'rgb('+rand(0,255,true)+','+rand(0,255,true)+','+rand(0,255,true)+')',
      'top': rand(0,container.height()-size),
      'left': rand(0,container.width()-size)
    }).attr({
      'data-dX':rand(-10,10),
      'data-dY':rand(1,10)
    });
    console.log(newBall);
  }
}

function moveBalls() {
  var maxX = container.width(),
      maxY = container.height();
      $('.ball',container).each(function(i,b) {
        var ball = $(b),
         pos = ball.position()
         x = pos.left,
         y = pos.top,
         dX = parseFloat(ball.attr('data-dX')),
         dY = parseFloat(ball.attr('data-dY')),
         size = ball.height();
     if(x+dX+size > maxX || x+dX < 0) ball.attr('data-dX',(dX=-dX)); 
     if(y+dY+size > maxY || y+dY < 0) ball.attr('data-dY',(dY=-dY)); 
     ball.css({'top':y+dY,'left':x+dX});
     console.log()
   });
}

function moveBallsIntoBounds() {
  console.log("moving da ballz");
  // var maxX = container.width(),
  //     maxY = container.height(); 
  //  console.log("moving balls")   
  //     // $('.ball').each(function(index) {
  //     //   console.log( index + ": "+$(this).css());
  //     // });

  // $('b',container).each(function(i,b) {
  //   var ball = $('.ball'),
  //       pos = ball.position(),
  //       x = pos.left,
  //       y = pos.top,
  //       size = ball.height();
  //   if (x+size > maxX) ball.css({ left: maxX-size+'px' });;
  //   if (y+size > maxY) ball.css({ top: maxY-size+'px' });;    
  // });
}


      