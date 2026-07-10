// 반복문 : for 문
// for( 초기값; 조건문; 증감식){}
// [1] 안녕하세요 3번
console.log("안녕하세요")
console.log("안녕하세요")
console.log("안녕하세요")

// 어디서부터(초기값) 어디까지(조건식) 무엇을(실행문) 반복
for(let 반복수 =1; 반복수 <=3; 반복수 ++){
    console.log("안녕하세요 \n")
}
// [2] 1~5까지 출력
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
// 초기값 : 1부터, 조건식 : 5까지, 증감식 : 1씩 증가, 실행문 : 반복처리할코드 console.log(?)
for( let 수 = 1; 수 <= 5; 수++){
    console.log(수)
}
/* [3] 1부터5까지 총합계
let 총합계 = 1; 
총합계 = 총합계 + 2
총합계 = 총합계 + 3
총합계 = 총합계 + 4
총합계 = 총합계 + 5
console.log(총합계)
*/
let 총합계 = 0; 
for(let 증가 = 1; 증가 <= 5; 증가++){
    총합계 = 총합계 + 증가
}
console.log(총합계)

// [4] 구구단
// 2단
console.log(`2*1 = ${2*1}`) // 2단이므로 2는 반복

for(let 단 =1; 단 <= 9; 단++){
    for(let 곱 =1; 곱 <= 9; 곱++){
        console.log(`${단} X ${곱} = ${단 * 곱}`)
    }
}

/* [6] 3개의 문자열을 입력받아 배열에 저장
let 배열 = [ ]
let 입력 = prompt('문자열 입력')
배열.push(입력)                 // 3번 반복
반복문 사용
*/
let 배열 = [ ]
for(let 반복수 =1; 반복수 <=3; 반복수++){
    let 입력 = prompt('문자열입력')
    배열.push(입력)
    console.log(입력)
}

// 반복문 제어키워드
// 1. continue;
for(let i=1; i<=5; i++){
    // 만약 반복수가 3이면, continue->증감식
    if(i == 3) continue //반복문의 *증감식*으로 흐름이 이동
    console.log( i )    //즉, i==3이면 consoloe.log 실행 안됨
}

// 2. break; 반복문의 탈출, 강제종료
for( let i=1; i <= 5; i++){
    if(i==5){break}
    console.log(i)
}   // break 만나면 break->에서 for문의 끝 중괄호} 밖으로 이동

// 3. 무한루프(무한반복) *특정조건의 break 권장*
// for( ; ; ){console.log('무한출력')} => 메모리 소모 큼
for( ; ; ){
    let 입력 = prompt()
    if(입력 == 'EXIT'){break}       // 입력한 값이 'EXIT'이면 무한루프 종료
}
