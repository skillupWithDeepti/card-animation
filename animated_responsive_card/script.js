// JavaScript (script.js)
// Sample data for the card
const cardData = {
    name: "KonoSuba",
    place: "Japan",
    moreInfo: "KonoSuba: God's Blessing On This Wonderful World! Vol.2  The spin-off series of the popular 'KonoSuba' series has been adapted into a TV anime! Includes episodes 5 to 8."
  };
  
  // Get the card elements
  const cardNameElement = document.querySelector(".card-name");
  const cardPlaceElement = document.querySelector(".card-place");
  const cardMoreInfoElement = document.querySelector(".card-more-info");
  
  // Update the card elements with sample data
  cardNameElement.textContent = cardData.name;
  cardPlaceElement.textContent = cardData.place;
  cardMoreInfoElement.textContent = cardData.moreInfo;
  