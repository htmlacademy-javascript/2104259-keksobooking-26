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

export {createOptions};
