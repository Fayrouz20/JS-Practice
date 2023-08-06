

let colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let btn = document.querySelector('#btn');

let container = document.querySelector('.container');

let span = document.querySelector('span');

btn.addEventListener('click',function(){
   let color = "#";
   for(let i = 0; i < 6; i++) color += colors[Random()];

   span.innerText = color;  
   container.style.backgroundColor = color;
});

function Random(){
    return Math.floor(Math.random() * colors.length);
}
