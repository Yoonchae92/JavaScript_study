/* 형태 : "use strict"
   엄격하게 JS문법을 사용하겠다는 선언
   작성한 위치부터 적용 */

  //book = '책'   // var, let, const를 쓰지 않아도 선언은 가능하다.
  //console.log(book)

  "use strict";
  try{
    book = '책'
    console.log(book)
  } catch(error){
    console.log(error.message)
  }