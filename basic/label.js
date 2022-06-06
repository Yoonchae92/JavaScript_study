/*현재 실행하는 코드에서 label로 직접 이동하는 것은 goto 문을 사용하는 것과 같습니다. 
반복이 끝나면 아래로 내려가게 되므로 코드의 가독성을 확보할 수 있지만, 반복문에서 임의의 곳으로 이동하면 따라가야 하며, 
그러다 보면 코드 흐름(프로세스, 처리)이 엉킬 수 있습니다. 함수에서 다른 함수를 호출했을 때, 호출된 함수의 실행이 끝나면 호출한 함수로 돌아옵니다. 
이런 형태가 되어야 코드 흐름이 엉키지 않습니다. label은 이런 흐름을 깨뜨리 수 있습니다.

이것은 80년, 90년대 코드 형태로, 이렇게 작성하는 것이 나쁘다는 것을 많은 개발자가 검증하였습니다. 
지금은 사용하지 않는 코드 형태입니다.*/

let i, j;


//for 문에 label break 사용
loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         break loop1;   // loop1 for 문 종료
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}

//label 붙인 블록에 break 사용하기

foo: {
  console.log('face');
  break foo;
  console.log('this will not be executed');
}
console.log('swap');