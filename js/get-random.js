function getRandomIntInclusive(min, max) {
  if(min >= 0 && max > min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }else {
    throw new Error('Ошибка!');
  }
}

function getRandomNumber(min, max, length){
  if(min >= 0 && max > min){
    return Number((Math.random() * (max - min) + min).toFixed(length));
  }else {
    throw new Error('Ошибка!');
  }
}
getRandomNumber(0, 10, 2);


export {getRandomIntInclusive};
export {getRandomNumber};

