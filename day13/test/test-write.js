function boardWrite(){
    //입력값 가져오기
    let title = document.querySelector('#title').value
    let content = document.querySelector('#content').value
    let pw = document.querySelector('#pw').value

    let obj ={title,content,pw}
    // localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList')
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList)}

    // 번호부여
    obj.no = boardList.length == 0?1: boardList[boardList.length-1].no+1
    // 등록
    boardList.push(obj)
    boardList = localStorage.setItem('boardList', JSON.stringify(boardList))
    alert('등록성공')

    location.href='test-list.html'
}