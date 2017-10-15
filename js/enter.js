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