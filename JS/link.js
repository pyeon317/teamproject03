
var headwrap = document.querySelector(".headwrap");

headwrap.onclick = function(e){

    if(e.target.classList.contains('mainlogo')){
        
        window.location.href = 'main.html';
    }
    else if(e.target.classList.contains('foodmenu')){
        
        window.location.href = 'pizzalist.html';
    }
    else if(e.target.classList.contains('evnt&ptnr')){
        
        window.location.href = 'evnt&ptnr.html';
    }
    else if(e.target.classList.contains('e_coupon')){
        
        window.location.href = 'e_coupon.html';
    }
    else if(e.target.classList.contains('grp_order')){
        
        window.location.href = 'grp_order.html';
    }
    else if(e.target.classList.contains('location')){
        
        window.location.href = 'location.html';
    }
    else if(e.target.classList.contains('login')){
        
        window.location.href = 'login.html';
    }
    else if(e.target.classList.contains('cart')){
        
        window.location.href = 'cart.html';
    }
    else{
        console.log(e.target);
    }
};

var headdropdownwrap = document.querySelector('.headdropdownwrap');

headdropdownwrap.onclick = function(e){
    console.log(e.target);
    if(e.target.classList.contains('foodmenu')){
        console.log(6)
        window.location.href = 'pizzalist.html';
    }
    else if(e.target.classList.contains('evnt&ptnr')){
        //console.log(7)
        window.location.href = 'evnt&ptnr.html';
    }
    else if(e.target.classList.contains('grp_order')){
        //console.log(7)
        window.location.href = 'grp_order.html';
    }else{
        console.log(e.target);
    }
};



var pizzaouter = document.querySelector(".pizzaouter");

pizzaouter.onclick = function(e){
    console.log(e.target.alt);
}







//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
var img = document.querySelector(".clear");

img.onclick = function(e){
    
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