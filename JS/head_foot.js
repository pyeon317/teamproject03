var headdropdownwrap = document.querySelector('.headdropdownwrap');
var headdropdown = document.querySelector('.headdropdown');
var headlist = document.querySelectorAll('.headdropdown > ul');

var header = document.querySelector('header');
var foodmenu = document.querySelector('.foodmenu');
var coupon = document.querySelector('.coupon');
var order = document.querySelector('.order');
var menudrop = document.querySelector('.menudrop');
var eventdrop = document.querySelector('.eventdrop');
var organizationdrop = document.querySelector('.organizationdrop');

header.addEventListener('mouseover', function(e) {
  if (
    e.target !== foodmenu &&
    e.target !== coupon &&
    e.target !== order &&
    !foodmenu.contains(e.target) &&
    !coupon.contains(e.target) &&
    !order.contains(e.target) &&
    !menudrop.contains(e.target) &&
    !eventdrop.contains(e.target) &&
    !organizationdrop.contains(e.target)
  ) {
    headdropdownwrap.style.display = 'none';
    headdropdown.style.display = 'none';
  } else {
    headdropdownwrap.style.display = 'block';
    headdropdown.style.display = 'block';

    if (e.target === foodmenu) {
      headlist[0].style.display = 'block';
      headlist[1].style.display = 'none';
      headlist[2].style.display = 'none';
    } else if (e.target === coupon) {
      headlist[0].style.display = 'none';
      headlist[1].style.display = 'block';
      headlist[2].style.display = 'none';
    } else if (e.target === order) {
      headlist[0].style.display = 'none';
      headlist[1].style.display = 'none';
      headlist[2].style.display = 'block';
    }
  }
});

menudrop.addEventListener('mouseover', function(e) {
  headdropdownwrap.style.display = 'block';
  headlist[0].style.display = 'block';
});

eventdrop.addEventListener('mouseover', function(e) {
  headdropdownwrap.style.display = 'block';
  headlist[1].style.display = 'block';
});

organizationdrop.addEventListener('mouseover', function(e) {
  headdropdownwrap.style.display = 'block';
  headlist[2].style.display = 'block';
});

var my = document.querySelector('.my');
if(sessionStorage.key('kakao_access')) {
  my.innerHTML = 'My';
}