

let header = document.querySelector('header');

let modelbtn = document.querySelector('.btn');

let cancel = document.querySelector('.cancel');

let modal = document.querySelector('.modal');

modelbtn.addEventListener('click',function(){
    modal.classList.add('show-modal');
    header.style.display='none';
});

cancel.addEventListener('click',function(){
    modal.classList.remove('show-modal');
    header.style.display='block';
});