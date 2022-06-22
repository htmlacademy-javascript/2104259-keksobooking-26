function getRandomIntInclusive(min, max) {
  if(min < 0 || max <= min){
    throw new Error('Ошибка!');
  }else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

getRandomIntInclusive(0, 10);

function getRandomNumber(min, max, legth){
  if(min < 0 || max <= min){
    throw new Error('Ошибка! 2');
  }else {
    return (Math.random() * (max - min) + min).toFixed(legth);
  }
}

getRandomNumber(0, 10, 2);

