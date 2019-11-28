let arr = [-2,1,-3,4,-1,2,1,-5,4]


function maxsubArr(arr){
  let range = 1
  let returnval = Math.minval;
  let decrementinglength = arr.length
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < decrementinglength; j++){
      //determining value
      let temp = subVal(arr.slice(j,j+range))
      if(temp > returnval){
        returnval = temp
      }
    }
    //determining range
    decrementinglength--
    range++
  }
  return returnval
}


console.log(maxsubArr(arr))




function subVal(arr){
  let returnval = 0
  for(let i = 0; i < arr.length; i++){
    returnval += arr[i]
  }
  return returnval
}
