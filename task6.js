


let btn = document.querySelector('.switch-btn');

let myvideo = document.querySelector('.video');

btn.addEventListener('click',function(){
 
  if(btn.classList.contains('slid')){
    btn.classList.remove('slid');
    myvideo.play();
  }else{
    btn.classList.add('slid');
    myvideo.pause();
  }

});