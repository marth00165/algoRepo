function addBorder(picture){
  let topBorder = ""
  let answerArr = []
  for(let i = 0; i < picture.length; i++){
    let x = picture[i];
    let y = "*" + x + "*";
    topBorder = "";
    for(let j = 0; j < y.length; j++){
      topBorder = topBorder + "*";
    };
    answerArr.push(y);
  };
  answerArr.unshift(topBorder);
  answerArr.push(topBorder);
  return answerArr;
};

console.log(addBorder(["abc","ded"]));
