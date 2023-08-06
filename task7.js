

let btn = document.querySelector('.toggle-bar');

let myMenu = document.querySelector('.menu');

btn.addEventListener('click',function(){

    myMenu.classList.toggle('show-menu');
});