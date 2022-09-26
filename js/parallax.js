let light = document.querySelector('.light');
let roulette = document.querySelector('.roulette');
let front_coins = document.querySelector('.front_coins');
let cube1 = document.querySelector('.cube1');
let cube2 = document.querySelector('.cube2');
let soccer = document.querySelector('.soccer');
let basket = document.querySelector('.basket');
let amer_foot = document.querySelector('.amer_foot');
let back_coins = document.querySelector('.back_coins');

window.addEventListener('mousemove', function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  light.style.transform = 'translate(-' + x * 5 + 'px, -' + y * 5 + 'px) ';
  roulette.style.transform = 'translate(-' + x * 4 + 'px, -' + y * 4 + 'px) ';
  front_coins.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px) ';
  cube1.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px) ';
  cube2.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px) ';
  soccer.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px) ';
  basket.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px) ';
  amer_foot.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px) ';
  back_coins.style.transform = 'translate(-' + x * 8 + 'px, -' + y * 8 + 'px) ';
});
