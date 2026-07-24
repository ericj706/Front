boardView()

function boardView(){
    // 웹 게시물 번호 가져오기
    let no = new URLSearchParams(location.search).get('no')

    // localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList')
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList)}

    // 선택한번호와 게시물번호 조회 비교
    for(let i=0; i<=boardList.length-1;i++){
        obj = boardList[i];
        if(no == obj.no){    // 번호 비교 같다면
            document.querySelector('#title').innerHTML=obj.title
            document.querySelector('#content').innerHTML=obj.content
            return;
        }
    }
}

function boardDelete(){
    // 웹 게시물 번호 가져오기
    let no = new URLSearchParams(location.search).get('no')

    // localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList')
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList)}

    // 번호 비교
    for(let i=0; i<=boardList.length-1;i++){
        obj = boardList[i];
        if(no == obj.no){   // 번호 같다면 삭제, localStorage다시 불러오기
            // * 비밀번호 일치 조건 빠졌어요! //넣었습니다!!
            let confirm = prompt('비밀번호 입력')
            if(confirm == obj.pw ){
                boardList.splice(i,1)
                boardList = localStorage.setItem('boardList', JSON.stringify(boardList))
                alert('삭제 성공!!!!!!!!!!!')
                location.href = 'test-list.html'
            }else{alert('일치하지 않는 비밀번호입니다')}
        }
    }
}