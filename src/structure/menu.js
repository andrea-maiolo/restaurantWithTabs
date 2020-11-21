{
  /* <div class="slideshow-container">
    <div class="slideshow-inner">
    
      <div class="mySlides">
        <img class="imges" src="../../../dist/styles/img/eaters-collective-12eHC6FxPyg-unsplash.jpg">
        <p class="description">pasta al pesto</p>
      </div>
      
      <div class="mySlides">
        <img class="imges" src= "../../../dist/styles/img/louis-hansel-shotsoflouis-cC0_UO1Obg4-unsplash.jpg">
        <p class="description">pizza</p>    
      </div>
      
      <div class="mySlides">
        <img class="imges" src="../../../dist/styles/img/wine-dharma-LAQVVwmIZQI-unsplash.jpg">
        <p class="description">spiedini di pesce</p>    
      </div>

      <div class="mySlides">
        <img class="imges" src="../../../dist/styles/img/mgg-vitchakorn-azTbzHoA9nc-unsplash.jpg">
        <p class="description">pesce con clawshew</p>    
      </div>

      <div class="mySlides">
        <img class="imges" src="../../../dist/styles/img/mgg-vitchakorn-98Xi5vMGKck-unsplash.jpg">
        <p class="description">pasta ai gamberi</p>    
      </div>

    </div>


    <a class="prev" onclick="plusSlides(-1)">❮</a>
    <a class="next" onclick="plusSlides(1)">❯</a>
      
  </div>  */
}

//this us the menu page generating function 

// const createMenu = (function() {
function createMenu(){

  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.id='container';

  const slideshowContainer = document.createElement('div');
  slideshowContainer.classList.add('slideshow-container-menu');
  const slideshowInner = document.createElement('div');
  slideshowInner.classList.add('slideshow-inner-menu');

  const slides1 = document.createElement('div');
  slides1.classList.add('mySlides-menu');
  const img1 = document.createElement('img');
  img1.classList.add('images-menu');
  // img1.src = "../../dist/styles/eaters-collective-12eHC6FxPyg-unsplash.jpg";
  img1.src = "styles/eaters-collective-12eHC6FxPyg-unsplash.jpg";
  const p1 = document.createElement('p');
  p1.classList.add('description');
  p1.innerHTML = "Pasta with fresh pesto";
  slides1.appendChild(img1);
  slides1.appendChild(p1);

  const slides2 = document.createElement('div');
  slides2.classList.add('mySlides-menu');
  const img2 = document.createElement('img');
  img2.classList.add('images-menu');
  // img2.src = "../../dist/styles/louis-hansel-shotsoflouis-cC0_UO1Obg4-unsplash.jpg";
  img2.src = "styles/louis-hansel-shotsoflouis-cC0_UO1Obg4-unsplash.jpg";
  const p2 = document.createElement('p');
  p2.classList.add('description');
  p2.innerHTML = "Pizza margherita";
  slides2.appendChild(img2);
  slides2.appendChild(p2);

  const slides3 = document.createElement('div');
  slides3.classList.add('mySlides-menu');
  const img3 = document.createElement('img');
  img3.classList.add('images-menu');
  // img3.src = "../../dist/styles/wine-dharma-LAQVVwmIZQI-unsplash.jpg";
  img3.src = "styles/wine-dharma-LAQVVwmIZQI-unsplash.jpg";
  const p3 = document.createElement('p');
  p3.classList.add('description');
  p3.innerHTML = "Fish skewers";
  slides3.appendChild(img3);
  slides3.appendChild(p3);

  const slides4 = document.createElement('div');
  slides4.classList.add('mySlides-menu');
  const img4 = document.createElement('img');
  img4.classList.add('images-menu');
  // img4.src = "../../dist/styles/mgg-vitchakorn-azTbzHoA9nc-unsplash.jpg";
  img4.src = "styles/mgg-vitchakorn-azTbzHoA9nc-unsplash.jpg";
  const p4 = document.createElement('p');
  p4.classList.add('description');
  p4.innerHTML = "Coleslaw salad with smoking salmon";
  slides4.appendChild(img4);
  slides4.appendChild(p4);

  const slides5 = document.createElement('div');
  slides5.classList.add('mySlides-menu');
  const img5 = document.createElement('img');
  img5.classList.add('images-menu');
  // img5.src = "../../dist/styles/mgg-vitchakorn-98Xi5vMGKck-unsplash.jpg";
  img5.src = "styles/mgg-vitchakorn-98Xi5vMGKck-unsplash.jpg";
  const p5 = document.createElement('p');
  p5.classList.add('description');
  p5.innerHTML = "Pasta with shrimps";
  slides5.appendChild(img5);
  slides5.appendChild(p5);

  slideshowInner.appendChild(slides1);
  slideshowInner.appendChild(slides2);
  slideshowInner.appendChild(slides3);
  slideshowInner.appendChild(slides4);
  slideshowInner.appendChild(slides5);

  const a1 = document.createElement('a');
  a1.classList.add('prev-menu');
  a1.innerHTML = "❮";

  const a2 = document.createElement('a');
  a2.classList.add('next-menu');
  a2.innerHTML = "❯";

  slideshowContainer.appendChild(slideshowInner);
  slideshowContainer.appendChild(a1);
  slideshowContainer.appendChild(a2);

  container.appendChild(slideshowContainer);

  content.appendChild(container)
//  })()
}


export {createMenu}