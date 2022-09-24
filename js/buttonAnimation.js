const leftTable = document.querySelector('.item_left');
const btn = document.querySelector('.button');
const container = document.querySelector('.button_animation');
console.log(leftTable);

btn.addEventListener('mouseover', function (event) {
  leftTable.style.opacity = 0;
});

btn.addEventListener('mouseout', function (event) {
  leftTable.style.opacity = 100;
});
let calculateAngle = function (e, item, parent) {
  let dropShadowColor = `0px 0px 40px rgba(255, 55, 220, 0.5), 0px 0px 70px rgba(255, 55, 220, 0.2),
    0px 2px 50px #ff37dc, inset 0px -4px 2px #dec45d, inset 0px 1px 0px #c6a013`;

  if (parent.getAttribute('data-filter-color') !== null) {
    dropShadowColor = parent.getAttribute('data-filter-color');
  }

  if (parent.getAttribute('data-custom-perspective') !== null) {
    parent.style.perspective = `${parent.getAttribute('data-custom-perspective')}`;
  }

  let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
  // Get the y position relative to the button
  let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

  let halfWidth = item.getBoundingClientRect().width / 2;
  let halfHeight = item.getBoundingClientRect().height / 2;

  let calcAngleX = (x - halfWidth) / 50;
  let calcAngleY = (y - halfHeight) / 4;

  item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${calcAngleY}deg) scale(1)`;

  parent.style.perspective = `${halfWidth * 2}px`;
  item.style.perspective = `${halfWidth * 3}px`;

  let calcShadowX = (x - halfWidth) / 3;
  let calcShadowY = (y - halfHeight) / 3;

  item.style.filter = `drop-shadow(${-calcShadowX}px ${calcShadowY}px 15px ${dropShadowColor})`;
};

document.querySelectorAll('.button').forEach(function (item) {
  item.addEventListener('mouseenter', function (e) {
    calculateAngle(e, this.querySelector('span'), this);
  });
  // Add on mousemove
  item.addEventListener('mousemove', function (e) {
    calculateAngle(e, this.querySelector('span'), this);
  });

  item.addEventListener('mouseleave', function (e) {
    let dropShadowColor = `rgba(0, 0, 0, 0.3)`;
    if (item.getAttribute('data-filter-color') !== null) {
      dropShadowColor = item.getAttribute('data-filter-color');
    }
    console.log(item.querySelector('.span'));
    item.querySelector('span').style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
    item.querySelector('span').style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
  });
});
