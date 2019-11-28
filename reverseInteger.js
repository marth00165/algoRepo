
function reverseInt(number, reversejawn = 0){
  if (number !== 0){
    let jawn = Math.floor(number/10)
    newnum = number/10 - jawn
    console.log(newnum)
    reversejawn = (reversejawn+newnum)*10;
    reverseInt(jawn, reversejawn)
  }
  else {
    console.log(Math.round(reversejawn))
  }
}


reverseInt(6594)
reverseInt(12345)
