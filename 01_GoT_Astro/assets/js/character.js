import { render } from "./base.js";
import { addImagen } from "./img.js";
import { addEmoji } from "./emoji.js";
import { GenerateOptionAdviser } from "./Asesor.js";
import { GenerateOptionSquire } from "./Escudero.js";
import { GenerateOptionFighter } from "./Luchador.js";
import { GenerateOptionKing } from "./Rey.js";

export function createCharacter(
  selector = "body",
  position = "beforeend",
  character
) {
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
          <i class="emoji ${addEmoji(GoTArray[i].category)}"></i>
          </div>
        </div>
    </li>
    `;
    render(selector, position, template);
  }
}
