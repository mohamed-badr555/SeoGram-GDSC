let btn = document.querySelector(".par");
window.onscroll = function () {
    if (window.scrollY >= 600){
        btn.style.display="block";
    }
    else{
        btn.style.display="none";
    }
}

let head = document.getElementById("head");
console.log(btn);
window.onscroll = function(){
    if (window.scrollY >= 200) {
        head.style.cssText = " left:0;position:fixed;width:100%;z-index:110000000;background:#ffff; ";
    }
    else{
        head.style.cssText = "position:relative;";
    }
}



