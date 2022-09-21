let bg = document.querySelector('.button');
window.addEventListener('mousemove', function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg.style.transform = 'translate(-' + x * 5 + 'px, -' + y * 5 + 'px) skew(-30deg)';
});
