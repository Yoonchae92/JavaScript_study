//형태 : for(초깃값opt;비교opt;증감opt)문장
//형태에서 opt는 생략 가능-가독성이 떨어져서 잘 사용하지 않음

//초깃값과 증감 생략
var k =0;
for(; k<3;){
  console.log(k)
  k++
}

//비교값과 증감 생략
for(k<3; ;){
  console.log(k)
  k++
  if(k>2){
    break;
  }
}

/* for문을 이용하여 1에서 50까지 출력하기 
    1. 1에서 50까지 반복
    2. 홀수번째 값과 
    3. 짝수 번째 값을 누적
    4. 반복한 값을 누적*/

//1. 1에서 50까지 출력
let single = 0, double = 0;
for(i=1; i<51; i++){
  if (i%2 === 0){
    double += i
    //console.log(double)
  } else {
    single += i
    //console.log(single)
  }
}
console.log(double)
console.log(single)
console.log(Number(double) + Number(single))