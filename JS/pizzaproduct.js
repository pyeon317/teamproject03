var pizzatitle = document.querySelector('.pizzaproductcontent > p:nth-child(1)');
var totalsize = document.querySelector('.totalsize');
totalsize.innerHTML = pizzatitle.innerHTML;

var sizebtn = document.querySelector('.sizebtnwrap');
var sizebtnleft = document.querySelector('.sizebtnleft');
var sizebtnright = document.querySelector('.sizebtnright');
var sizebtnleft1 = document.querySelector('.sizebtnleft > p:nth-child(1)');
var sizebtnleft2 = document.querySelector('.sizebtnleft > p:nth-child(2)');
var sizebtnright1 = document.querySelector('.sizebtnright > p:nth-child(1)');
var sizebtnright2 = document.querySelector('.sizebtnright > p:nth-child(2)');

var totalprice = document.querySelector('.totalprice');

sizebtn.addEventListener('click', function (e) {
  if (e.target.tagName === 'UL') return;
  if (e.target.classList.contains('sizeclickL')) {
    sizebtnleft.style.backgroundColor = 'red';
    sizebtnleft1.style.backgroundColor = '#B40E29';
    sizebtnleft2.style.color = 'white';
    sizebtnright.style.backgroundColor = 'rgb(218, 215, 215)';
    sizebtnright1.style.backgroundColor = '#afafaf';
    sizebtnright2.style.color = 'black';

    if (totalsize.innerHTML.includes('L') || totalsize.innerHTML.includes('M')) {
      totalsize.innerHTML = pizzatitle.innerHTML;
    }

    totalsize.innerHTML += ' ' + sizebtnleft1.innerHTML;
    var price = parseInt(sizebtnleft2.innerHTML.replace(/[^0-9]/g, ''));
    totalprice.innerHTML = "총 1개 " + price + "원 담기";

  } else if (e.target.classList.contains('sizeclickR')) {
    sizebtnleft.style.backgroundColor = 'rgb(218, 215, 215)';
    sizebtnleft1.style.backgroundColor = '#afafaf';
    sizebtnleft2.style.color = 'black';
    sizebtnright.style.backgroundColor = 'red';
    sizebtnright1.style.backgroundColor = '#B40E29';
    sizebtnright2.style.color = 'white';

    if (totalsize.innerHTML.includes('L') || totalsize.innerHTML.includes('M')) {
      totalsize.innerHTML = pizzatitle.innerHTML;
    }

    totalsize.innerHTML += ' ' + sizebtnright1.innerHTML;
    var price = parseInt(sizebtnright2.innerHTML.replace(/[^0-9]/g, ''));
    totalprice.innerHTML = "총 1개 " + price + "원 담기";

  }
});

var doughbtnwrap = document.querySelector('.doughbtnwrap');
var totaldough = document.querySelector('.totaldough');
var doughspecial = document.querySelector('.special > span');
var doughoriginal = document.querySelector('.original > span');

doughbtnwrap.addEventListener('change', function() {
  if (document.getElementById('s1').checked) {
    totaldough.innerHTML = doughspecial.textContent;
  } else if (document.getElementById('s2').checked) {
    totaldough.innerHTML = doughoriginal.textContent;
  }
});


// var countbtnwrap = document.querySelector('.countwrap');
// countbtnwrap.addEventListener('change', function(e) {
//     totalprice.innerHTML = document.countForm.count.value;
// })

