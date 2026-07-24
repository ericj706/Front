getBoard()
function getBoard(){
    const url = new URLSearchParams(location.search)
    const selectNo = url.get('no')

    let boardList = localStorage.getItem('boardList')
    if(boardList == null){boardList= []}
    else{boardList = JSON.parse(boardList)}

    for(let i=0; i<=boardList.length-1;i++){
        const obj = boardList[i];
        if(selectNo == obj.no){
            document.querySelector("#title").innnerHTML = obj.title
            document.querySelector('#content').innerHTML = obj.content
            return;
        }
    }
}


function boardDelete(){
    const url = new URLSearchParams(location.search)
    const selectNo = url.get('no')

    let boardList = localStorage.getItem('boardList')

    for(let i=0; i<=boardList.length-1; i++){
        let obj = boardList[i];
        if(selectNo == obj.no){
            let confirm = prompt('비밀번호를 입력하세요')
            if(confirm == obj.pw){
                boardList.splice(i,1)
                localStorage.setItem('boardList', JSON.stringify(boardList))
                alert('삭제성공')
                location.href="list.html"
            }
        }
    }
}