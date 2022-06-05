let k=0, m=0;
while(k <3){
  m++
  if(m === 2){
    break;
  }
  console.log(m);
}

for(let k=0; k<3; k++){
  if(k === 1){
    break
    //break로 인해 출력되지 않음
    console.log("k === 1")
  }
  log(k)
}

//continue시 for문 증감연산자로 다시 돌아가서 시작