// 1. HTML
// 2. 메모리 구조
// let memberList= [{no, id, pw}, {no, id, pw}]
// 3. [1] signup함수
function signup(){
    // 입력받은 값 가져오기
    let id = document.querySelector('.singId').value;
    let pw = document.querySelector('.signPw').value;

    // localStorage에 memberList 배열 가져오기  *JSON 파싱
    let memberList = JSON.parse(localStorage.getItem('memberList'))
    if(memberList == null){ // 최초등록이라면
        memberList = []
    }
    // 마지막 인덱스 = .length-1
    let no = memberList.length == 0 ? 1: memberList[memberList.length-1].no+1   // 최초라면 1번 부여, 아니라면 마지막 인덱스 번호 +1
    
    // 객체화
    let obj = {no, id, pw}; console.log(obj);
    // 배열 저장
    memberList.push(obj); console.log(memberList)
    // 등록성공
    alert('회원가입 완료');

    // *localStorage에 memberList 배열 저장하기
    localStorage.setItem('memberList' , JSON.stringify(memberList))

}

// [2] login 함수, 자료 단순 비교
function login(){
    let id = document.querySelector('.loginId').value;
    let pw = document.querySelector('.loginPw').value;

    // 입력받은 값이 배열내 정보와 비교
    // *localStorage 기존 배열 가져온다
    let memberList = JSON.parse(localStorage.getItem('memberList'))
    if(memberList =! null){
        for(let i=0; i<=memberList.length-1;i++){
            if(memberList[i].id == id && memberList[i].pw == pw){
                alert('로그인 성공');
                return;
            }
        }
    }
    alert('동일한 회원정보가 없습니다')
}


