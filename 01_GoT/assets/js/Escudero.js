export function GenerateOptionSquire(personaje) {
    const template =`<li>Sirve a: ${personaje.servesTo.name} ${personaje.servesTo.family} </li>`;
    return template;
}
