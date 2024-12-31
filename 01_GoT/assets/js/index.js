console.log("Charge main.js")
import DATAGOT from '../../data.json' with {type: 'json'};
import { GenerateCharacter,addImagen } from "./Personaje.js";

const GoTArray=[];
for (let i = 0; i < DATAGOT.length; i++) {
    const element = DATAGOT[i];
    GoTArray.push(element);
}

const listCharacter = document.querySelector('ul.row');
listCharacter.insertAdjacentHTML('afterbegin',GenerateCharacter(GoTArray));
const button = listCharacter.querySelectorAll('button.character__action');
const isAliveOrDead =document.querySelectorAll('div.character__info i.fas');
const sectionComunications =document.querySelector('div.comunications');
const img = document.querySelectorAll('div img');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click',hanlerClick);
}

function hanlerClick(event){

    if(event.target.attributes["data-speak"] != undefined){
        let numberHablar = event.target.attributes["data-speak"].value;
        sectionComunications.classList
        const template = `<div class="comunications__grid">
        <div><p class="comunications__on">${GoTArray[numberHablar].message}</p></div>
        <div><img class="comunications__picture" src="${addImagen(GoTArray[numberHablar].name)}" 
        alt="${GoTArray[numberHablar].name} ${GoTArray[numberHablar].family}" /></div></div>`;
        
        sectionComunications.innerHTML=template; 

        sectionComunications.classList.add('comunications_visible');
        setTimeout(() => {
            sectionComunications.classList.remove('comunications_visible');
        }, 1000);
        
    }else{
        
        let numberMorir = event.target.attributes["data-dead"].value;
        isAliveOrDead[numberMorir].classList.remove('fa-thumbs-up');
        isAliveOrDead[numberMorir].classList.remove('live');
        isAliveOrDead[numberMorir].classList.add('fa-thumbs-down');
        isAliveOrDead[numberMorir].classList.add('dead');
        img[numberMorir].classList.add('transformed');
        }
    }





