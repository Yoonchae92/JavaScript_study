//프로그램을 실행 중 예외 발생시 프로그램이 종료되지 않도록 하기 위해 try-catch문을 사용한다.
// try문 안에서 예외가 발생할 경우 catch가 실행되고 프로그램은 종료되지 않는다.
//finally 블록은 예외 발생과 관계없이 실행

/* 형태
  try 블록 catch(식별자) 블록
  try 블록 fianlly 블록
  try 블록 catch (식별자) 블록 finally 블록 */

let value;
try {
  value = ball; // ball은 변수지만 선언되지 않았기 때문에 에러가 발생한다.
} catch(err){
  console.log("catch 실행됨")
} finally{
  console.log("finally 실행")
}