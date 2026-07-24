boardPrint()

function boardPrint(){

    let Tbody = document.querySelector('#Tbody')


    let boardList = localStorage.getItem('boardList')
    if(boardList == null){boardList=[]}
    else{boardList = JSON.parse(boardList)}

    let html =''
    for(let i=0; i<=boardList.length-1;i++){
        let obj = boardList[i]
        html += `<tr>
                    <td>${obj.no}</td>
                    <td><a href = "test-view.html?no=${obj.no}"> ${obj.title} </a> </td>
                </tr>`
    }
    Tbody.innerHTML=html;
}
