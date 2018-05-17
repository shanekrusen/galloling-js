var drawStars = function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i <= 75; i++) {
    context.beginPath();
    var rand_x = Math.random(i) * canvas.width;
    var rand_y = Math.random(i) * canvas.height;
    context.arc(rand_x, rand_y, 1, 0, 2*Math.PI);
    context.fillStyle = "#FFFFFF";
    context.fill();
    context.closePath();
  }
}

window.onload = function() {
  drawStars();
  window.addEventListener('resize', drawStars());
}
