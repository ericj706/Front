boardPrint();   //JS가 실행될때 해당 함수를 1번 호출;
function boardPrint(){
    //어디에, <tbody>
    const boardTbody = document.querySelector('#boardTbody')
    //무엇을
    // localStorage에서 배열가져오기
    let boardList = localStorage.getItem('boardList')
    if(boardList == null){boardList=[]}
    else{boardList = JSON.parse(boardList)} //객체타입으로 변환
    // 반복문 이용해 배열내 하나씩 조회
    let html=''
    for(let i=0; i<=boardList.length-1;i++){
        const obj = boardList[i]
        html+= `<tr>
                    <td>${obj.no}</td>
                    <td><a href = "view.html?no=${obj.no}" > ${obj.title} </a> </td>
                </tr>`
    }
    boardTbody.innerHTML=html;
}

