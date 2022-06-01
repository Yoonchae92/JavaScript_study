const a = 1, b = 1
//; 세미콜론을 붙이면 문장이 끝났다는 뜻이지만, 줄바꿈을 할시 자동으로 ;(생략) 붙는다.
// 따라서 세미콜론을 붙이지 않아도 문장으로 인식된다.
if (a === b) console.log ('블록 사용 안함')

if (a === b)
  console.log ('1번줄')
  console.log ('2번줄')

  //{} 사용 (추천)
  if (a === b){
    console.log('블록 사용')
  }