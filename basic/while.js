//표현식의 평가 결과가 false가 될 때까지 문장을 반복하여 실행
//반복이 종료되는 조건 필요
let k = 1
while (k<3){
  console.log(k);
  k++
}

//do ~ while(do 문장을 먼저 실행 후, while 실행)
//do 문장 실행후 while이 평가 결과가 true이면 다시 do문 실행
//while 평가결과가 false 일때 while문의 block을 실행
k = 0;
do {
  console.log('do:',k);
  k++;
} while (k<3){
  console.log('while:', k);
}