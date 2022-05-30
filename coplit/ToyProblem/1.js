function orderOfPresentation (N, K) {
  // TODO: 여기에 코드를 작성합니다.
  // 배열을 for문을 이용해 뒤에서부터 하나씩 바꿔가면서 만든다.
  let result = [];
  let arr =[];
  let count=0;
  result.push(arr)  // arr를 다른배열에 넣어준다.
  for(let i=1; i<=N; i++){
    arr.push(i)
    for(let i=2; i<=N; i++){
       arr.push(i) 
      for(let i=3; i<=N; i++){
          arr.push(i)
        for(let i=4; i<=N; i++){
            arr.push(i)
            result.push(arr)
            count++
            console.log(arr)
          if (arr === K) {
          return count
          }
          arr= [] //arr를 초기화 해준다.
        }  
      }
     // 배열이 K와 같아질때 count를 출력한다.
  
    }
  }

  // 배열이 출력 될때 마다 count를 1씩 올린다.
 
}
    
    
    // 배열이 출력 될때 마다 count를 1씩 올린다.
    // 배열이 K와 같아질때 count를 출력한다.
let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

// output = orderOfPresentation(4, [1, 3, 2, 4])
// console.log(output); // 6