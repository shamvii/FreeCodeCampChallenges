// Only change code below this line
function countdown(n){
  if(n<1){
    return [];
  } else{
    const countArray = countdown(n - 1);
    countArray.unshift(n);
     return countArray;
  }
  // return countArray;
}
countdown(-1);
countdown(10);
countdown(5);
// Only change code above this line
