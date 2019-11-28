function confirmEnding(str1, str2)
{
  length1 = str1.length
  length2 = str2.length
  start = length1 - length2
  sub = str1.substr(start,length1)
  if(sub===str2){
    console.log(true);

  }
  else {
    console.log("LOL GF");
  }

}

confirmEnding("poetree", "tree")
