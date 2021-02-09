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

// menu navigation 

function anchors() {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            blockID = anchor.getAttribute('href').substr(1);
            document.getElementById(blockID).scrollIntoView({
                behavior:'smooth',
                block: 'start'
            });
        });

    }
}

anchors();

//move photo 

window.addEventListener('scroll', () => {
    let scrollRes = window.pageYOffset;
    console.log(scrollRes);
});

window.addEventListener('scroll', () => {
    if ( window.pageYOffset >= 372) {
        const photo = document.querySelector('.about__photo');
        photo.classList.add('photo_show');
        const descr = document.querySelector('.about__descr');
        descr.classList.add('descr_show');
        const skills =document.querySelector('.about__skills');
        skills.classList.add('skills_show');
    } else if (window.pageYOffset < 372) {
        const photo = document.querySelector('.about__photo');
        photo.classList.remove('photo_show'); 
        const descr = document.querySelector('.about__descr');     
        descr.classList.remove('descr_show');
        const skills =document.querySelector('.about__skills');
        skills.classList.remove('skills_show');
    } 
    if ( window.pageYOffset >= 1255) {
        const photo = document.querySelector('.about__photo');
        photo.classList.remove('photo_show'); 
        const descr = document.querySelector('.about__descr');     
        descr.classList.remove('descr_show');
        const skills =document.querySelector('.about__skills');
        skills.classList.remove('skills_show');
    }
    if (window.pageYOffset >= 2038) {
        const usage = document.querySelector('.usage__items');
        usage.classList.add('usage_show');
    } else if (window.pageYOffset < 2043) {
        const usage = document.querySelector('.usage__items');
        usage.classList.remove('usage_show');
    }
    if (window.pageYOffset >= 2900) {
        const usage = document.querySelector('.usage__items');
        usage.classList.remove('usage_show');
    }
});

//preloader 
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }