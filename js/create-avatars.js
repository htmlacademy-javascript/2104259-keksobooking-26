const avatars = [];

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

export {createAvatars};

