//형태 : throw 표현식
//명시적으로 예외를 발생시킴
//예외가 발생하면 catch 실행

try{
  //throw를 만나면 에러가 발생 catch문으로 이동
  throw "예외";
  let sports = '스포츠'   //실행되지 않음
} catch(err){
  console.log(err)
  //console.log(sports)
}

try {
  throw {
    msg: "예외 발생시킴",
    bigo:"임의의 이름 사용"
  }
} catch(err){
  console.log(err.msg)
  console.log(err.bigo)
}

try {
  throw new Error("예외 발생시킴")  //오브젝트의 message에 "에외 발생시킴"이 설정된다.
} catch(err){
  console.log(err.message)
}