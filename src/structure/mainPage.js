
function mainPage(){
    const content=document.getElementById('content');
const container=document.createElement('div');
container.classList.add('container');

const divImagesPannel = document.createElement('div');
divImagesPannel.classList.add("imagesP");

const divFirstImg = document.createElement('div');
divFirstImg.id = "firstImg";
divFirstImg.classList.add("images");

const welcomeMessage = document.createElement('h1');
welcomeMessage.innerHTML = "Welcome to Mario's!";

const divFirstImgP = document.createElement('p');
divFirstImgP.innerHTML = "Modern Italian cuisine, and dramatic design.\<br>Mario's is an award-winning restaurant \<br>which uses the finest ingredients\<br>and expert traditional techniques to create \<br> timeless yet innovative signature dishes.";

divFirstImg.appendChild(welcomeMessage);
divFirstImg.appendChild(divFirstImgP);

const divSecondImg = document.createElement('div');
divSecondImg.id = "secondImg";
divSecondImg.classList.add("images");

const divSecondImgP = document.createElement('p');
const divSecondImgA = document.createElement('a');
divSecondImgA.innerHTML = "Listen to the \<strong>stories\</strong> of the people that have exerienced our great cusine";
divSecondImgA.href = '#';

divSecondImgP.appendChild(divSecondImgA);
divSecondImg.appendChild(divSecondImgP)


const divThirdImg = document.createElement('div');
divThirdImg.id = "thirdImg";
divThirdImg.classList.add("images");

const divThirdImgP = document.createElement('p');
const divThirdImgA = document.createElement('a');
divThirdImgA.innerHTML = 'Take a look at our delicious \<strong>menù\</strong>';
divThirdImgA.href = '#';

divThirdImgP.appendChild(divThirdImgA);
divThirdImg.appendChild(divThirdImgP);

divImagesPannel.appendChild(divFirstImg);
divImagesPannel.appendChild(divSecondImg);
divImagesPannel.appendChild(divThirdImg);

container.appendChild(divImagesPannel);

content.appendChild(container);
}

export {mainPage}