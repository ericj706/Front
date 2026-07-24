boardPrint() // 함수 실행!
function boardPrint(){
    //어디에
    let tbody = document.querySelector('#tbody')

    //무엇을 배열가져오기
    let boardList = localStorage.getItem('boardList')
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList)}

    //조회해서 html입력
    let html=''
    for(let i=0; i<=boardList.length-1; i++){
        obj = boardList[i]
        html+=`<tr>
                    <td>${obj.no}</td>
                    <td><a href='test-view.html?no=${obj.no}'> ${obj.content}</a></td>
                </tr>`
    }
    tbody.innerHTML=html
}