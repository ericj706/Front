function boardWrite(){
    // 입력 마크업 가져오기
    const titleInput = document.querySelector('#titleInput')
    const contentInput = document.querySelector('#contentInput')
    const pwInput = document.querySelector('#pwInput')

    //입력 마크업 객체 내 입력값 가져오기
    const title = titleInput.value;
    const content = contentInput.value;
    const pw = pwInput.value;

    //객체화
    const obj = {title, content, pw}

    //localstorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList'); //배열만들기
    if(boardList == null){boardList=[]}
    else{boardList = JSON.parse(boardList); }

    
    //객체를 배열에 저장
    obj.no = boardList.length == 0 ? 1: boardList[boardList.length-1].no+1  //자동 게시물 번호
    boardList.push(obj);
    
    //localStorage에 배열 저장
    localStorage.setItem('boardList', JSON.stringify(boardList))

    alert('등록성공')
    location.href = 'list.html' //글쓰기 성공시 게시물목록(list)페이지로 이동
}

