export function GenerateOptionAdviser(personaje) {
    const template =`<li>Asesora a: ${personaje.adviseTo.name} ${personaje.adviseTo.family} </li>`;
    return template;
}
