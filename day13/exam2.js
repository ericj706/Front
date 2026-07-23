/*
    QueryString : URL 웹 주소 상의 매개변수 사용

*/
let url = new URLSearchParams(location.search);
console.log(url)
// http://127.0.0.1:5500/day13/exam2.html?name=유재석
let name = url.get('name')
console.log(name)

// [2] 페이지를 이동하는 방법
// 1) <a href = "웹주소 "> 링크 </>
let pcode = url.get('pcode');
let page = url.get('page');
console.log( pcode, page );

// 2) location.href = "웹주소"
function 링크함수(){
    location.href="exam2.html?name=강호동"
}

/*
    인터벌: 특정한 주기에 따라 코드를 반복 실행
        -사용법: setInterval(함수명,밀리초)
            -> 함수명에 () 소괄호 x
            -> 밀리초(1/1000) : 1000 -> 1초, 반복주기
        - clearInterval
*/
let value =0;
function 증가함수(){
    value += 1
    document.querySelector('#box1').innerHTML = value
}
// [1] 특정한 함수를 주기에 따라 반복 실행
setInterval(증가함수 , 1000)

function 시계함수(){
    let today = new Date()  // 1) 현재 날짜 / 시간 가져온다
    let hour = today.getHours()         // 2) 시,분,초
    let minute = today.getMinutes()
    let second = today.getSeconds() 

    let time = `${hour}:${minute}:${second < 10 ? "0"+second : second}`    // 3) 시분초 조합
    document.querySelector('#box2').innerHTML = time    // 4) html출력

}
//[2]
setInterval(시계함수, 1000)


// [3] 인터벌 시작/종료
let time = 0;
let timeInter; // 인터벌 저장하는 변수
function 타이머시작(){
    timeInter = setInterval(타이머함수, 1000)
}

function 타이머함수(){
    time++;
    document.querySelector('#box3').innerHTML = time
}

function 타이머종료(){
    clearInterval(timeInter)
}