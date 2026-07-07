window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="rgba(15,23,42,.95)";

}else{

nav.style.background="rgba(255,255,255,.05)";

}

});
