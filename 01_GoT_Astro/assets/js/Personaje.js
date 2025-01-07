import { GenerateOptionAdviser } from "./Asesor.js";
import { GenerateOptionSquire } from "./Escudero.js";
import { GenerateOptionFighter } from "./Luchador.js";
import { GenerateOptionKing } from "./Rey.js";

function addEmogi(category) {
  let clase = "";
  switch (category) {
    case "king":
      clase = "fas fa-chess-king";
      break;
    case "fighter":
      clase = "fas fa-fist-raised";
      break;
    case "adviser":
      clase = "fas fa-graduation-cap";
      break;
    case "squire":
      clase = "fas fa-shield-alt";
      break;
  }
  return clase;
}
export function addImagen(name) {
  let img;
  switch (name) {
    case "Joffrey":
      img = "./assets/img/joffrey.jpg";
      break;
    case "Jamie":
      img = "./assets/img/jaime.jpg";
      break;
    case "Daenerys":
      img = "./assets/img/daenerys.jpg";
      break;
    case "Tyrion":
      img = "./assets/img/tyrion.jpg";
      break;
    case "Bronn":
      img = "./assets/img/bronn.jpg";
      break;
    default:
      img = "./assets/img/no-one.jpg";
      break;
  }
  return img;
}

export function GenerateCharacter(GoTArray) {
  let template = "";

  for (let i = 0; i < GoTArray.length; i++) {
    template += `
    <li class="character col">
        <div class="card character__card">
          <img src="${addImagen(GoTArray[i].name)}" alt="${GoTArray[i].name} ${
      GoTArray[i].family
    }" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${GoTArray[i].name} ${
      GoTArray[i].family
    }</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${GoTArray[i].age}</li>
                <li>
                  Estado: `;
    template += GoTArray[i].isAlive
      ? `<i class="fas fa-thumbs-up live"></i>`
      : `<i class="fas fa-thumbs-down dead"></i>`;
    template += `
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">`;
    switch (GoTArray[i].category) {
      case "king":
        template += GenerateOptionKing(GoTArray[i]);
        break;
      case "fighter":
        template += GenerateOptionFighter(GoTArray[i]);
        break;
      case "adviser":
        template += GenerateOptionAdviser(GoTArray[i]);
        break;
      case "squire":
        template += GenerateOptionSquire(GoTArray[i]);
        break;
    }

    template += `
              </ul>
              <div class="character__actions">
                <button class="character__action btn" data-speak="${i}" >Coletilla</button>
                <button class="character__action btn" data-dead="${i}" >Muerte</button>
              </div>
            </div>
          </div>
          <div class="back_emogi">
          <i class="emoji ${addEmogi(GoTArray[i].category)}"></i>
          </div>
        </div>
    </li>
 `;
  }
  return template;
}
