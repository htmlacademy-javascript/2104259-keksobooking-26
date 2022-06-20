function getRandomIntInclusive(min, max) {
  if(min < 0 || max <= min){
    console.log('Ошибка!');
  }else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
}

getRandomIntInclusive(0, 10);



function getRandomNumber(min, max, legth){
  if(min < 0 || max <= min){
    console.log('Ошибка!');
  }else {
    return (Math.random() * (max - min) + min).toFixed(legth);
  }
}

getRandomNumber(0, 10, 2);

