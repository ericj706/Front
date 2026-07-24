function boardWrite(){
    //입력값가져오기
    const titleInput = document.querySelector('#titleInput')
    const contentInput = document.querySelector('#contentInput')
    const pwInput = document.querySelector('#pwInput')

    const title = titleInput.value
    const content = contentInput.value
    const pw = pwInput.value

    //배열가져오기
    let obj = {title, content, pw}
    let boardList = localStorage.getItem('boardList')
    if(boardList == null){boardList= []}
    else{boardList = JSON.parse(boardList)}
    // 번호매기기
    obj.no = boardList.length == 0?1: boardList[boardList.length-1].no+1
    boardList.push(obj)

    localStorage.setItem('boardList', JSON.stringify(boardList))

    alert('등록성공')
    location.href="test-list.html"
}
