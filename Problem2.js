const fiboEvenSum = num => {
  let sumOfEven = temp = prevNum = 0;
  let nextNum = 1;
    while(temp <= num) {
    temp = prevNum + nextNum;
    prevNum = nextNum;
    nextNum = temp;
    if (isEven(temp)) {
      sumOfEven += temp;
    };
  }
  return typeof sumOfEven;
}

const isEven = num => num % 2 === 0;
