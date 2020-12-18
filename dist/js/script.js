const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});  
   
close.addEventListener('click', () => {
    menu.classList.remove('active');
});  

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});  

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
        menu.classList.remove('active');
	}
});

const counters = document.querySelectorAll('.number_item__descr'),
       line = document.querySelectorAll('.number_item__yellow');


       counters.forEach( (item, i) => {
            line[i].style.width = item.innerHTML;
       });

