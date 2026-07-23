/*
    프론트엔드 : 화면, 시각적 요소
    브라우저(크롬/엣지/사파리)에 의존하여 HTML랜더링
    - HTML 안에 JS/CSS도 포함하여 같이 랜더링
    - 브라우저 F5(새로고침) 하면 재랜더링하므로 JS 초기화한다.
    백엔드 : 비즈니스로직,서버
*/
// [1] JS 변수들은 브라우저에서 F5새로고침 초기화된다.
// [2] HTML 안에 포함된 JS/CSS파일들은 F12(개발자도구) [Sources]/[Console] 코드 확인
    // -> 하나의 HTML에 여러개 JS/CSS 파일 가능
// [3] 서로 다른 .js 파일이 동일한 HTML에 포함되면 코드 공유 가능
    // test.js에서 선언된 코드가, exam1.js에서 호출(사용) 가능


// 브라우저에 저장 기능, 개발자도구 [F12] -> [application]
/* 
    - 웹스토리지
        [1] 세션스토리지 : 세션 저장소
            - 모든 브라우저가 종료되면 자동 초기화/삭제
            -서로 다른 브라우저/탭 자료 공유 안됨.
            예] 이벤트정보들

        [2] 로컬스토리지 : 로컬저장소
            - 모든 브라우저가 종료되어도 저장 유지
            - 서로 다른 브라우저/탭 자료 공유됨. (단, 동일한 도메인 경우
            예] 자동로그인/로그인유지
        * 노출에 대한 위험한 경우 암호화 통해 자료 인코딩 한다.
*/
// [1] 웹 스토리지 객체 호출
console.log( localStorage )
console.log( sessionStorage )

// [2] 웹 스토리지 객체 내 자료 추가   .setItem('key', value)
sessionStorage.setItem('name', '유재석')
localStorage.setItem('age', 40)

// [3] 웹 스토리지 객체 내 자료호출 .getItem('key')
let name = localStorage.getItem('name'); console.log(name)
let age = localStorage.getItem('age'); console.log(age)

// [4] 웹 스토리지 객체 내 자료 삭제 .removeItem('key'), .clear()
sessionStorage.removeItem('name')   // 특정한 key가 존재하면 key value를 삭제
localStorage.clear()                // 모든 key 삭제

// * 웹 스토리지도 문자열만 지원 *타입변환 필요*
// [5] JSON (자바스크립트), 
// JSON.stringify(객체) : 객체 타입 --> 문자 타입 변환
sessionStorage.setItem('회원객체', JSON.stringify({'name': '유재석', 'age' : 40}))
// JSON.parse(문자열) : 문자열 타입 --> 객체 타입 변환
let 회원객체 = JSON.parse(sessionStorage.getItem('회원객체'))
console.log(회원객체)