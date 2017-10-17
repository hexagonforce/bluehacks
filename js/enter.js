// Source: https://stackoverflow.com/questions/21666899/fade-an-image-using-javascript-not-jquery

function fadeIn(el, time) {
  el.style.opacity = 0;
  el.style.display = "block";

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}

fadeIn(document.getElementById('coming-logo'), 2000);
fadeIn(document.getElementById('coming-soon-text'), 2000);

$(window).scroll(function(){
if($(window).scrollTop() >= 10){
   $('#mainNav').css('height', '90px');
   $('#mainNav').css('background-color', 'rgba(0, 0, 0, 0.6)');
}
else {
   $('#mainNav').css('background-color', 'black');
   $('#mainNav').css('height', '120px');

}
});