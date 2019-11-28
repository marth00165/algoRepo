function jawn(x){
let answer = 0;
for (var i = 0; i < x.length; i++) {
  answer = answer + x[i];
};
return answer;
};

console.log(jawn([1,2,3,4,5]));
