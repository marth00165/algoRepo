function yearToCentury(year){
  let x = year / 100;
  let y = Math.floor(x);
  return (y + 1);
};


console.log(yearToCentury(1905))
