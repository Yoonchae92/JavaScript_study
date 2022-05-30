const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = 1;
  if(arr.length <=3) {
    result *= el
  }
  if(arr.length > 3){
    arr.map((el) => {
      if(el >0 ){
      result *= el
      }
    })
  }
  return result
};

let output = largestProductOfThree([0,2,3]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)