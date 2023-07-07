var popup = document.querySelector('.popup');
var close = document.querySelector('.btn_typeA1');
var closeday = document.querySelector('.btn_typeA2');

if (getCookie('main_popup') == true) {

    popup.innerHTML = "";
}

close.onclick = function () {

    popup.innerHTML = "";

};
closeday.onclick = function () {

    //쿠키생성
    addCookie('main_popup', true);

    popup.innerHTML = "";

};

function addCookie(name, value){

    //시간설정
    var date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    console.log(date);

    //쿠키 생성

    var cookie = "";
    cookie += name + "=" + value + "; ";
    cookie += "expires="+ date.toUTCString() + "; path=/";

    document.cookie = cookie;
}

//쿠키확인하기
function getCookie(name){
    var arr = document.cookie.split('; ');
    
    if(arr.length != 0){
    
        for(var i = 0; i < arr.length; i++){
            
            if(arr[i].indexOf(name + "=") != -1){
                return true;//쿠키가 있다는 뜻
            }
         }
    }
}


var arr = ["모바일상품권 선물하기", "회원가입 혜택 알아보기", "피자헛 제휴할인 모아보기", "피자헛 창업안내&문의"];
var arrdesc = ["피자로 마음을 선물하세요", "회원 가입 즉시 100% 쿠폰 지급", "통신사, 카드사 할인 및 적립 안내", "피자헛 가맹점주님을 모십니다"];


var ptit = document.querySelector(".tit");
var desc = document.querySelector(".desc1");

var i = 1;

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    //allowSlideNext : false,

    autoplay: {//자동재생
        delay: 5000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,//페이지 클릭이동 가능
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

});

setInterval(function () {

    ptit.innerHTML = arr[i];
    desc.innerHTML = arrdesc[i];

    i++;
    if (i == 4) i = 0;

}, 5175);

var img = document.querySelector(".clear");

//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

/* img.onclick = function(e){
    
    if(e.target.classList.contains('delivery')){
        //console.log(5)
        window.location.href = 'delivery.html';
    }
    else if(e.target.classList.contains('packaging')){
        //console.log(6)
        window.location.href = 'packaging.html';
    }
    else if(e.target.classList.contains('favorite')){
        //console.log(7)
        window.location.href = 'favorite.html';
    }
    
};


var headwrap = document.querySelector(".headwrap");

headwrap.onclick = function(e){

    if(e.target.classList.contains('mainlogo')){
        //console.log(5)
        window.location.href = 'main.html';
    }
    else if(e.target.classList.contains('foodmenu')){
        //console.log(6)
        window.location.href = 'foodmenu.html';
    }
    else if(e.target.classList.contains('coupon')){
        //console.log(7)
        window.location.href = 'coupon.html';
    }
    else if(e.target.classList.contains('discount')){
        //console.log(7)
        window.location.href = 'discount.html';
    }
    else if(e.target.classList.contains('order')){
        //console.log(7)
        window.location.href = 'order.html';
    }
    else if(e.target.classList.contains('gps')){
        //console.log(7)
        window.location.href = 'gps.html';
    }
    else if(e.target.classList.contains('my')){
        //console.log(7)
        window.location.href = 'my.html';
    }
    else if(e.target.classList.contains('cart')){
        //console.log(7)
        window.location.href = 'cart.html';
    }
    else{
        console.log(e.target);
    }
} */



