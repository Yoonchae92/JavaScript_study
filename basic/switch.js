const { options } = require("nodemon/lib/config")

/*switch(표현식) {
  case 표현식 : 문장리스트 opt
  default: 문장리스트opt
}
표현식이 일치하는 case 문 수행, 없을 시 default 수행
break 사용 안할 시 선택된 case 아래의 모든 문장을 수행
*/
let exp =2;
switch(exp){
  case 1:
    console.log(100)
    break
  case 2:
    console.log(200)
  default:
    console.log("err")    
}

// or(||)형태-> break를 사용하지 않음
exp = 3;
switch(exp){
  //2 또는 3
  case 2:
  case 3:
    console.log(100);
}