export function addEmoji(category) {
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
