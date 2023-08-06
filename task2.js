

let img = document.querySelector('img');

let author = document.getElementById('author');

let job = document.getElementById('job');

let view = document.getElementById('view');

let prev = document.getElementById('prev');

let next = document.getElementById('next');

let btn = document.querySelector('button');

let myreview = [
    {
        img : 'image/comments-2.jpg',
        author : 'Toni henderson',
        job : 'football player',
        view :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis esse nam earum enim autem libero temporibus assumenda, id voluptas maiores quasi fugiat, explicabo perspiciatis asperiores necessitatibus sequi totam facere.',
    },
    {
        img : 'image/comments-3.jpg',
        author : 'Leila santmaria',
        job : 'singer',
        view :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis esse nam earum enim autem libero temporibus assumenda, id voluptas maiores quasi fugiat, explicabo perspiciatis asperiores necessitatibus sequi totam facere.',
    },
    {
        img : 'image/comments-4.jpg',
        author : 'Marcelo andreas',
        job : 'actor',
        view :'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis esse nam earum enim autem libero temporibus assumenda, id voluptas maiores quasi fugiat, explicabo perspiciatis asperiores necessitatibus sequi totam facere.',
    },
    {
        img : 'image/comments-5.jpg',
        author : 'abraham silicon',
        job : 'software developper',
        view :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis esse nam earum enim autem libero temporibus assumenda, id voluptas maiores quasi fugiat, explicabo perspiciatis asperiores necessitatibus sequi totam facere.',
    }

];

let i = 0;

next.addEventListener('click',function(){
            i++;
       if(i > myreview.length - 1) i = 0;
        img.src = myreview[i].img;
        author.innerText =  myreview[i].author;
        job.innerText = myreview[i].job;
        view.innerText = myreview[i].view;

});

prev.addEventListener('click',function(e){
   i--;
   if (i < 0) i = 0;
    img.src = myreview[i].img;
        author.innerText =  myreview[i].author;
        job.innerText = myreview[i].job;
        view.innerText = myreview[i].view;
});


//random button 


btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * myreview.length);
    img.src = myreview[random].img;
    author.innerText =  myreview[random].author;
    job.innerText = myreview[random].job;
    view.innerText = myreview[random].view;
})