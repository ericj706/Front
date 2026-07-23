
// 쿼리스트링에서 특정한 게시물번호의 정보조회
getBoard();
function getBoard(){
    // url상의 웹주소 가져오기
    const url = new URLSearchParams(location.search);

    //웹주소에서 선택된 게시물 번호 가져오기
    const selectNo = url.get('no')
    
    //localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList')
    if(boardList == null){boardList=[]}
    else(boardList= JSON.parse(boardList))

    //선택된 게시물번호와 일치한 게시물 찾기
    for(let i=0; i<=boardList.length-1;i++){
        let obj = boardList[i]
        if(obj.no == selectNo){ // 만약에 내가 선택한 게시물번호와 일치하다면
            document.querySelector('#title').innerHTML = obj.title
            document.querySelector('#content').innerHTML = obj.content;
            return;
        }
    }
}



function boardDelete(){
    const url = new URLSearchParams(location.search)
    const selectNo = url.get('no')

    let boardList = localStorage.getItem('boardList')

    for(let i=0; i<=boardList.length-1;i++){
        let obj = boardList[i]
        if(obj.no == selectNo){
            let confirm = prompt('비밀번호')
            if(confirm == obj.pw){
                boardList.splice(i,1)
                localStorage.setItem('boardList', JSON.stringify(boardList))
                alert
                location.href="list.html"
            }
        }
    }
}

