

//let content = document.querySelector('.items');
let menu = document.querySelector('.cancel');
let links = document.querySelector('.side');
let btn = document.querySelector('.items');
btn.addEventListener('click',function(){

    links.classList.toggle('show-side');
});

menu.addEventListener('click',function(){

    links.classList.remove('show-side');
});
