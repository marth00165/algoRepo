function product(x){
  let prodArray = [];
  for(let i=0; i < x.length; i++){
    str = x[i].toString();
    arr = str.split("");
    let product = 1;
    for(let j = 0; j < arr.length; j++){
      product = product * arr[j];
    };
      if (!prodArray.includes(product)){
        prodArray.push(product);

      };

  };
  return prodArray.length;
};

console.log(product([2, 8, 121, 42, 222, 23]));
