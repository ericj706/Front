// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 (각 변수에 저장하고) 총점 과 평균을 계산하여 console탭에 출력하시오.
/*
let 국어점수 = prompt("국어점수를 작성해주세요")        
console.log("국어: ")
console.log(국어점수)
let 영어점수 = prompt("영어점수를 작성해주세요")        
console.log("영어: ")
console.log(영어점수)
let 수학점수 = Number(prompt("수학점수를 작성해주세요"))
// prompt앞에서 Number로 타입변환      
console.log("수학: ")
console.log(수학점수)

// prompt함수는 입력받은것을 문자열로만 타입 변환
let 총점 = Number(국어점수) + parseInt(영어점수) + 수학점수
let 평균 = 총점 / 3
console.log(총점)
console.log(평균)
console.log( `총점 : ${총점} , 평균 : ${평균}` )


// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.

let 반지름 = Number(prompt("반지름을 입력해주세요"))
let 원넓이 = 반지름 * 반지름 * 3.14

console.log( `반지름 : ${반지름} , 원넓이 : ${원넓이}` )

// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
let 실수1 = parseFloat(prompt("첫번째 실수를 입력해주세요"))
let 실수2 = parseFloat(prompt("두번째 실수를 입력해주세요"))
let 비율 = (실수1 / 실수2) *100
console.log( `실수1 : ${실수1} , 실수2 : ${실수2} , 비율 : ${비율} %` )


// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
let 정수 = parseInt(prompt("정수를 입력해주세요"))
let 결과 = 정수 % 2 == 1
console.log(`결과 : ${결과}`)


// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
let 정수 = parseInt(prompt("정수를 입력해주세요"))
let 나머지 = 정수 % 7
console.log(나머지==0 ? "True"  : "False")

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 (입력받은)아이디가 'admin' 이고 (입력받은)비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
let 아이디 = prompt("아이디를 입력해주세요")
let 비밀번호 = prompt("비밀번호를 입력해주세요")
let 결과 = 아이디== 'admin' && 비밀번호 =='1234'
console.log(`결과 : ${결과}`)


// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이거나 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
let 정수 = parseInt(prompt("정수를 입력해주세요"))
let 결과 = 정수%2==1 || 정수 % 7 == 0
console.log(`결과 : ${결과}`)


// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
let 점수1 = Number(prompt("1차점수를 작성해주세요"))
let 점수2 = Number(prompt("2차점수를 작성해주세요"))
let 결과 = (점수1+점수2) >=150 ? '합격' : '불합격'
console.log(`결과 : ${결과}`)
document.querySelector("h3").innerHTML = `결과 : ${결과}`


// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.
let 이름1 = (prompt("이름1을 작성해주세요"))
let 이름2 = (prompt("이름2를 작성해주세요"))
let 결과1 = 이름1 == '유재석' ? 이름1+"(방장)" : 이름1
let 결과2 = 이름2 == '유재석' ? 이름2+"(방장)" : 이름2
document.querySelector("ol").innerHTML = `<li> ${결과1} </li> <li>${결과2} </li>`
*/

// 증감연산자
let age = 40
console.log(age++)
console.log(age++)
console.log(--age)
console.log(age--)
console.log(age--)

