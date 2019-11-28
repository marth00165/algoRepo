function firstDigit(input){
  let jawn = input.split("")
  for(i=0; i < jawn.length; i++){
    character = jawn[i]
      if(parseInt(character)){
        return character
        }
  }
}

console.log(firstDigit("aef---___****&nbsp;55434r3eff"))
