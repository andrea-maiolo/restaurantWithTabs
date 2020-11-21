//importing all file here
import {pageLoad} from './pageLoad';
import {reservationsPageGenerator} from './structure/reservations';
import {createStories} from './structure/stories';
import {createMenu} from './structure/menu';
import {mainPage} from './structure/mainPage';

//those are the nav that will help you navigate in the website
let a1Top = document.querySelector('#a1Top');
a1Top.addEventListener('click', loadMenuPage);

let a2Top = document.querySelector('#a2Top');
a2Top.addEventListener('click', loadStoriesPage);

let a3Top = document.querySelector('#a3Top');
a3Top.addEventListener('click', loadReservationPage);

let lA = document.querySelector('.logo-link');
lA.addEventListener('click', mainPageGenerator);
//this is the main window of the page
const content = document.querySelector('#content');
//footer to be moved at the end of page
let footer = document.querySelector('#footer');

//those are the functions that load the respective pages
function loadReservationPage(){
   let container = document.querySelector('#container');
    content.removeChild(container);
    content.removeChild(footer);
    reservationsPageGenerator();
    content.appendChild(footer);
}

function loadStoriesPage(){
   let container = document.querySelector('#container');
   content.removeChild(container);
   content.removeChild(footer);
   createStories();
   content.appendChild(footer);
   startCarouselStory();
}

function loadMenuPage(){
   let container = document.querySelector('#container');
   content.removeChild(container);
   content.removeChild(footer);
   createMenu();
   content.appendChild(footer);
   startCarouselMenu();
}

function mainPageGenerator() { 
  let container = document.querySelector('#container');
  content.removeChild(container);
  content.removeChild(footer);
  mainPage();
  content.appendChild(footer);
}

 //this is the logic for the carousel
  //this is the part of code that creates the carousel
//for the stories page
 function startCarouselStory(){
 let slideIndexStories = 1;
 let myTimerStories;
 let slideshowContainerStories;
 let a1Stories = document.querySelector('.prev-stories');
 let a2Stories = document.querySelector('.next-stories');
 a1Stories.addEventListener('click', go);
 a2Stories.addEventListener('click', go);
 
 function go(e) {
   let arrow = e.path[0];
   if (arrow == a2Stories) {
       plusSlides(1);
   } else if (arrow == a1Stories) {
       plusSlides(-1);
   }
 }
 
 window.addEventListener('popstate', function() {
   showSlidesStories(slideIndexStories);
   myTimerStories = setInterval(function() {
       plusSlides(1)
   }, 4000);
 
   slideshowContainerStories = document.getElementsByClassName('slideshow-inner-stories')[0];
 
   slideshowContainerStories.addEventListener('mouseenter', pause)
   slideshowContainerStories.addEventListener('mouseleave', resume)
 })
 
 //Controls the current slide and resets interval if needed
 function currentSlide(n) {
   clearInterval(myTimerStories);
   myTimerStories = setInterval(function() {
       plusSlides(n + 1)
   }, 4000);
   showSlidesStories(slideIndexStories = n);
 }
 
 function showSlidesStories(n) {
   let slides = document.getElementsByClassName("mySlides-stories");
   let i;
   if (n > slides.length) {
       slideIndexStories = 1
   }
   if (n < 1) {
       slideIndexStories = slides.length
   }
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slides[slideIndexStories - 1].style.display = "block";
 }
 
 // NEXT AND PREVIOUS CONTROL
 function plusSlides(n) {
   clearInterval(myTimerStories);
   if (n < 0) {
       showSlidesStories(slideIndexStories -= 1);
   } else {
       showSlidesStories(slideIndexStories += 1);
   }
 
   //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
 
   if (n === -1) {
       myTimerStories = setInterval(function() {
           plusSlides(n + 2)
       }, 4000);
   } else {
       myTimerStories = setInterval(function() {
           plusSlides(n + 1)
       }, 4000);
   }
 }
 
 let pause = () => {
   clearInterval(myTimerStories);
 }
 
 let resume = () => {
   clearInterval(myTimerStories);
   myTimerStories = setInterval(function() {
       plusSlides(slideIndexStories)
   }, 4000);
 }
}

//comment
//this isntead is the one
//that create the fucntion for the menu page

function startCarouselMenu(){
    let slideIndexMenu = 1;
    let myTimerMenu;
    let slideshowContainerMenu;
    let a1Menu = document.querySelector('.prev-menu');
    let a2Menu = document.querySelector('.next-menu');
    a1Menu.addEventListener('click', go);
    a2Menu.addEventListener('click', go);
    
    function go(e) {
      let arrow = e.path[0];
      if (arrow == a2Menu) {
          plusSlides(1);
      } else if (arrow == a1Menu) {
          plusSlides(-1);
      }
    }
    
    window.addEventListener('popstate', function() {
      showSlidesMenu(slideIndexMenu);
      myTimerMenu = setInterval(function() {
          plusSlides(1)
      }, 4000);
    
      slideshowContainerMenu = document.getElementsByClassName('slideshow-inner-menu')[0];
    
      slideshowContainerMenu.addEventListener('mouseenter', pause)
      slideshowContainerMenu.addEventListener('mouseleave', resume)
    })
    
    //Controls the current slide and resets interval if needed
    function currentSlide(n) {
      clearInterval(myTimerMenu);
      myTimerMenu = setInterval(function() {
          plusSlides(n + 1)
      }, 4000);
      showSlidesMenu(slideIndexMenu = n);
    }
    
    function showSlidesMenu(n) {
      let slides = document.getElementsByClassName("mySlides-menu");
      let i;
      if (n > slides.length) {
          slideIndexMenu = 1
      }
      if (n < 1) {
          slideIndexMenu = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndexMenu - 1].style.display = "block";
    }
    
    // NEXT AND PREVIOUS CONTROL
    function plusSlides(n) {
      clearInterval(myTimerMenu);
      if (n < 0) {
          showSlidesMenu(slideIndexMenu -= 1);
      } else {
          showSlidesMenu(slideIndexMenu += 1);
      }
    
      //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    
      if (n === -1) {
          myTimerMenu = setInterval(function() {
              plusSlides(n + 2)
          }, 4000);
      } else {
          myTimerMenu = setInterval(function() {
              plusSlides(n + 1)
          }, 4000);
      }
    }
    
    let pause = () => {
      clearInterval(myTimerMenu);
    }
    
    let resume = () => {
      clearInterval(myTimerMenu);
      myTimerMenu = setInterval(function() {
          plusSlides(slideIndexMenu)
      }, 4000);
    }
   }