function largestofFour(a) {
  ansArr = [];
  for(let i = 0; i < a.length; i++ ){
    let x = a[i];
    let max = 0;
    for (let j = 0; j < x.length; j++){
        let jawn = x[j]
      if (jawn > max) {

        max = jawn;

      };

    };

    ansArr.push(max);


  };
  return ansArr;
};

console.log(largestofFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
