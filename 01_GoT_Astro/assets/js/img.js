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
