const SIMILAR_AD_COUNT = 10;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKING = ['12:00', '13:00', '14:00'];
const ALL_FEATURES= ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const ALL_PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const avatars = [];

function getRandomIntInclusive(min, max) {
  if(min >= 0 && max > min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }else {
    throw new Error('Ошибка!');
  }
}

getRandomIntInclusive(0, 10);

function getRandomNumber(min, max, length){
  if(min >= 0 && max > min){
    return Number((Math.random() * (max - min) + min).toFixed(length));
  }else {
    throw new Error('Ошибка!');
  }
}

getRandomNumber(0, 10, 2);

function createAvatars(callback){
  for(;;) {
    let randomNumber = `${callback(1, 10)}`;

    if(randomNumber.length < 2){
      randomNumber = 0 + randomNumber;
    }
    if (!avatars.includes(randomNumber)) {
      avatars.push(randomNumber);
      return `img/avatars/user${randomNumber}.png`;
    }
  }
}

function createOptions(callback, array){
  const options = [];
  const amountOptions = callback(0, array.length);
  let i = 0;
  while(i < amountOptions){
    const randomOption = array[callback(0, array.length - 1)];
    if(!options.includes(randomOption)){
      options.push(randomOption);
      i++;
    }
  }
  return options;
}

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

const similarAds = Array.from({length: SIMILAR_AD_COUNT}, createAd);
similarAds();
