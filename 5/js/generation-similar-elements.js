import { createAds } from './create-ads.js';
// console.log(createAds);

const TYPES_NAME = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
пше  hotel: 'Бунгало'
};


const similarAds = createAds;
const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

function generationSimilarElements(items){
  const offer = items.offer;
  const author = items.author;

  const adElement = similarAdTemplate.cloneNode(true);

  const titleElement = adElement.querySelector('.popup__title');
  if(offer.title){
    titleElement.textContent =  offer.title;
  }else{
    titleElement.remove();
  }

  const adressElement = adElement.querySelector('.popup__text--address');
  if(offer.address){
    adressElement.textContent = offer.address;
  }else{
    adressElement.remove();
  }

  const priceElement = adElement.querySelector('.popup__text--price');
  if(offer.price){
    priceElement.textContent = offer.price;
  }else{
    priceElement.remove();
  }

  const typeElement = adElement.querySelector('.popup__type');
  if(offer.type){
    typeElement.textContent = TYPES_NAME[offer.type];
  }else{
    typeElement.remove();
  }

  const capacityElement = adElement.querySelector('.popup__text--capacity');
  if(offer.rooms && offer.guests){
    capacityElement.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  }else{
    capacityElement.remove();
  }

  const timeElement = adElement.querySelector('.popup__text--time');
  if(offer.checkin && offer.checkout){
    timeElement.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}.`;
  }else{
    timeElement.remove();
  }


  const featuresElement = adElement.querySelector('.popup__features');
  const featuresList = featuresElement.querySelectorAll('.popup__feature');
  if(offer.features){
    const modifiers = offer.features.map((featureItem) => `popup__feature-- + ${featureItem}`);

    featuresList.forEach((featuresListItem) => {
      const modifier = featuresListItem.classList[1];

      if(!modifiers.includes(modifier)) {
        featuresListItem.remove();
      }
    });
  }else{
    featuresElement.remove();
  }

  const descriptionElement = adElement.querySelector('.popup__description');
  if(offer.description){
    descriptionElement.textContent = offer.description;
  }else{
    descriptionElement.remove();
  }

  const photoElement = adElement.querySelector('.popup__photo');
  if(offer.photos){
    photoElement.src = offer.photos;
  }else{
    photoElement.remove();
  }

  const avatarElement = adElement.querySelector('.popup__avatar');
  if(author.avatar){
    avatarElement.src = author.avatar;
  }else{
    avatarElement.remove();
  }
  return adElement;
}

mapCanvas.appendChild(generationSimilarElements(similarAds[0]));

export { generationSimilarElements };
