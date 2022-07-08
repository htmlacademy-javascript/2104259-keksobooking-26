import {getRandomIntInclusive} from './get-random.js';
import {getRandomNumber} from './get-random.js';
import {createAvatars} from './create-avatars.js';
import {createOptions} from './create-options.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKING = ['12:00', '13:00', '14:00'];
const ALL_FEATURES= ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const ALL_PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

function createAd(){
  const lat = getRandomNumber(35.65000, 35.70000, 5);
  const lng = getRandomNumber(139.70000, 139.80000, 5);
  return{
    author:{
      avatar: createAvatars(getRandomIntInclusive),
    },
    offer:{
      title: 'Объявление',
      address: ` ${lat}, ${lng}`,
      price: getRandomIntInclusive(0, 10000),
      type: TYPES[getRandomIntInclusive(0, TYPES.length - 1)],
      rooms: getRandomIntInclusive(0, 5),
      guests: getRandomIntInclusive(0, 30),
      checkin: CHECKING[getRandomIntInclusive(0, CHECKING.length - 1)],
      checkout: CHECKING[getRandomIntInclusive(0, CHECKING.length - 1)],
      features: createOptions(getRandomIntInclusive, ALL_FEATURES),
      description: 'Прекрасный выбор для вашего отдыха!',
      photos: createOptions(getRandomIntInclusive, ALL_PHOTOS)
    },
    location: {
      lat: lat,
      lng: lng
    }
  };
}

export {createAd};
