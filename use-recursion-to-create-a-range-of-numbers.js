function rangeOfNumbers(startNum, endNum) {
  if(endNum - startNum === 0){
    return [startNum];
  } else {
    var arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
};
rangeOfNumbers(1, 5);
rangeOfNumbers(6, 9);
rangeOfNumbers(4, 4);