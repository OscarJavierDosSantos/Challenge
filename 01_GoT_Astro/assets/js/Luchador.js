export function GenerateOptionFighter(personaje) {
    const template =`
        <li>Arma: ${personaje.weapon} </li>
        <li>Destreza: ${personaje.skillLevel} </li>
`;
    return template;
}
