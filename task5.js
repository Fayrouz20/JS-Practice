
let  menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "image/ice.png",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "image/burger.png",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "image/pasta.png",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "image/pasta.png",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "image/burger.png",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "image/chicken.png",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "image/pasta.png",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "image/chicken.png",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "image/burger.png",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "image/chicken.png",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  let allBtn = document.getElementById('all');
  let breakfast = document.getElementById('break');
  let lunch = document.getElementById('lunch');
  let shacke = document.getElementById('shacke');
  let img = document.querySelector('img');
  let title = document.querySelector('h3');
  let price = document.querySelector('span');
 
  let description = document.querySelector('p');
  let myBtn = document.querySelector('.btn');
  let myMenu = document.querySelector('.menu');

  /*window.addEventListener('DOMContentLoaded',function(){

    let displayItems = menu.map(function(item){
      return `  <article class="menu">
      <div class="img">
          <img src=${item.img} alt="">
      </div>
      <div class="description">
          <div class="title">
              <h3>${item.title}</h3>
              <span>${item.price}</span>
          </div>
          <div class="lign"></div>
          <div class="content">
              <p>${item.desc}</p>
          </div>
      </div>
  </article>`
    });
    displayItems = displayItems.join('');
    myMenu.innerHTML = displayItems;
  });

  
  allBtn.addEventListener('click',function(){

    let displayItems = menu.map(function(item){
      return `  <article class="menu">
      <div class="img">
          <img src=${item.img} alt="">
      </div>
      <div class="description">
          <div class="title">
              <h3>${item.title}</h3>
              <span>${item.price}</span>
          </div>
          <div class="lign"></div>
          <div class="content">
              <p>${item.desc}</p>
          </div>
      </div>
  </article>`
    });
    displayItems = displayItems.join('');
    myMenu.innerHTML = displayItems;
  });

  breakfast.addEventListener('click',function(){

    
    let displayItems = menu.map(function(item){
      if(item.category === 'breakfast'){
      return `  <article class="menu">
      <div class="img">
          <img src=${item.img} alt="">
      </div>
      <div class="description">
          <div class="title">
              <h3>${item.title}</h3>
              <span>${item.price}</span>
          </div>
          <div class="lign"></div>
          <div class="content">
              <p>${item.desc}</p>
          </div>
      </div>
  </article>`}
    });
 
    displayItems = displayItems.join('');
    myMenu.innerHTML = displayItems;

  });

  lunch.addEventListener('click',function(){

    
    let displayItems = menu.map(function(item){
      if(item.category === 'lunch'){
      return `  <article class="menu">
      <div class="img">
          <img src=${item.img} alt="">
      </div>
      <div class="description">
          <div class="title">
              <h3>${item.title}</h3>
              <span>${item.price}</span>
          </div>
          <div class="lign"></div>
          <div class="content">
              <p>${item.desc}</p>
          </div>
      </div>
  </article>`}
    });
 
    displayItems = displayItems.join('');
    myMenu.innerHTML = displayItems;

  });

  shacke.addEventListener('click',function(){

    
    let displayItems = menu.map(function(item){
      if(item.category === 'shakes'){
      return `  <article class="menu">
      <div class="img">
          <img src=${item.img} alt="">
      </div>
      <div class="description">
          <div class="title">
              <h3>${item.title}</h3>
              <span>${item.price}</span>
          </div>
          <div class="lign"></div>
          <div class="content">
              <p>${item.desc}</p>
          </div>
      </div>
  </article>`}
    });
 
    displayItems = displayItems.join('');
    myMenu.innerHTML = displayItems;

  });*/

   function DisplayAllItems(arr ){
    let displayItems = arr.map(function(item){
    
      return `  <article class="menu">
      <div class="img">
          <img src=${item.img} alt="">
      </div>
      <div class="description">
          <div class="title">
              <h3>${item.title}</h3>
              <span>${item.price}</span>
          </div>
          <div class="lign"></div>
          <div class="content">
              <p>${item.desc}</p>
          </div>
      </div>
  </article>`
    });
    displayItems = displayItems.join('');
    myMenu.innerHTML = displayItems;
   }
  
 window.addEventListener('DOMContentLoaded',function(){
  DisplayAllItems(menu);
  let categories = menu.reduce(function(values,item){
   if(!values.includes(item.category)){
      values.push(item.category);
   }
    return values;

  },['all']);
 let categoryBtn = categories.map(function(type){
  return `<a data-id=${type}>${type}</a>`
 }).join('');
 
   myBtn.innerHTML = categoryBtn;
   let buttons = document.querySelectorAll('a');
   buttons.forEach(function(btn){
    btn.addEventListener('click',function(e){
      let category = e.currentTarget.dataset.id;
      let menuCategory = menu.filter(function(menuItem){
        if(menuItem.category === category){
          return menuItem;
        }
      });
      if(category === 'all'){
        DisplayAllItems(menu);
      }else{
        DisplayAllItems(menuCategory);
      }
    });
   });
});

 