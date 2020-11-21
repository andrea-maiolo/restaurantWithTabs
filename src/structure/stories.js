{
  /* <div class="slideshow-container">
    <div class="slideshow-inner">
      <div class="mySlides fade">

        <q class="text">Great food.
          We ate here during the week and we really enjoyed the food. Staff were very attentive and helpful. We are here for the summer and are really enjoying the food in Dingle. Great Restaurant</q>
        <p class="author">- AlexCoventry12</p>
      </div>
      
      <div class="mySlides fade">
        <q class="text">Well worth a return visit
          We visited Random on 14th August to celebrate a family birthday. This was the second time we visited this year as we had visited in previously in July with friends. The food was delicious- everyone was delighted with the portions even the hungry males. The service was friendly. In these times of COVID restrictions it also felt safe. We will be back on our next visit to Dingle. Would highly recommend this restaurant.</q>
        <p class="author">- ToadMo</p>
      </div>
      
      <div class="mySlides fade">
        <q class="text">Excellent cooking with great ingredients & robust flavours
          Looking for something a little different in Dingle? Random is a real find in a town where there is lots of great food but many menus look similar. Modern cooking with a twist here but not gimmicky. Portions are not small and there is good variety from a compact menu. There is no 'kids menu' as such but the restaurant is really accommodating and flexible in going 'off menu' for younger palates so you are sure to find something. Staff were very professional and welcoming from making the booking to the end of our meal. We went here on our last night of a week's holiday and will go back when we next visit Dingle.</q>
        <p class="author">- Thomas A. Edison</p>
      </div>
    </div>


    <a class="prev" onclick="plusSlides(-1)">❮</a>
    <a class="next" onclick="plusSlides(1)">❯</a>
      
    </div> */
}

//this fucntion will generate the above content

// const createStories = (function() {
function createStories(){

  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.id='container';

  const slideShowContainer = document.createElement('div');
  slideShowContainer.classList.add('slideshow-container-stories');
  const slideshowInner = document.createElement('div');
  slideshowInner.classList.add('slideshow-inner-stories');

  const slides1 = document.createElement('div');
  slides1.classList.add('mySlides-stories');
  const q1 = document.createElement('q');
  q1.classList.add('text');
  q1.innerHTML = "Great food. We ate here during the week and we really enjoyed the food. Staff were very attentive and helpful. We are here for the summer and are really enjoying the food in Dingle. Great Restaurant"
  const p1 = document.createElement('p');
  p1.classList.add('author');
  p1.innerHTML = "- AlexCoventry12";
  slides1.appendChild(q1);
  slides1.appendChild(p1);

  const slides2 = document.createElement('div');
  slides2.classList.add('mySlides-stories')
  const q2 = document.createElement('q');
  q2.classList.add('text');
  q2.innerHTML = "Well worth a return visit. We visited Random on 14th August to celebrate a family birthday. This was the second time we visited this year as we had visited in previously in July with friends. The food was delicious- everyone was delighted with the portions even the hungry males. The service was friendly. In these times of COVID restrictions it also felt safe. We will be back on our next visit to Dingle. Would highly recommend this restaurant."
  const p2 = document.createElement('p');
  p2.classList.add('author');
  p2.innerHTML = "- ToadMo";
  slides2.appendChild(q2);
  slides2.appendChild(p2);

  const slides3 = document.createElement('div');
  slides3.classList.add('mySlides-stories')
  const q3 = document.createElement('q');
  q3.classList.add('text');
  q3.innerHTML = "Excellent cooking with great ingredients & robust flavours. Looking for something a little different in Dingle? Random is a real find in a town where there is lots of great food but many menus look similar. Modern cooking with a twist here but not gimmicky. Portions are not small and there is good variety from a compact menu. There is no 'kids menu' as such but the restaurant is really accommodating and flexible in going 'off menu' for younger palates so you are sure to find something. Staff were very professional and welcoming from making the booking to the end of our meal. We went here on our last night of a week's holiday and will go back when we next visit Dingle."
  const p3 = document.createElement('p');
  p3.classList.add('author');
  p3.innerHTML = "- Thomas A. Edison";
  slides3.appendChild(q3);
  slides3.appendChild(p3);

  slideshowInner.appendChild(slides1);
  slideshowInner.appendChild(slides2);
  slideshowInner.appendChild(slides3);

  const a1 = document.createElement('a');
  a1.classList.add('prev-stories');
  a1.innerHTML = "❮";

  const a2 = document.createElement('a');
  a2.classList.add('next-stories');
  a2.innerHTML = "❯";

  slideShowContainer.appendChild(slideshowInner);
  slideShowContainer.appendChild(a1);
  slideShowContainer.appendChild(a2);

  container.appendChild(slideShowContainer);

  content.appendChild(container)

// })();
}


export{createStories}