let teamList = [{'tcode': 1, 'tname': '개발팀'}, 
    {'tcode': 2, 'tname': '디자인팀'}, 
    {'tcode': 3, 'tname': '기획팀'}] 

let personList = [ { 'pcode' : 11, 'pname' : '김민준', 'position' : '선임', 'tcode' : 1, 'pimg' : 'xxx.png'},  
    { 'pcode' : 21, 'pname' : '이서연', 'position' : '수석', 'tcode' : 2, 'pimg' : 'xxx.png'},
    { 'pcode' : 31, 'pname' : '박도윤', 'position' : '팀장', 'tcode' : 3, 'pimg' : 'xxx.png'} ]

let vacationList  = [ {'vcode': 101, 'pcode': 11, 'vsdate': '2025-08-04','vedate':'2025-08-05', 'vreason':'병원진료'}, 
    {'vcode': 102, 'pcode': 21, 'vsdate': '2025-07-21','vedate':'2025-07-25', 'vreason':'여름휴가'}]

// [1] 사원조회함수
personPrin()
function personPrint(){
    let tbody = document.querySelector('#main table tbody')
    let html=''
    for( let i=0; i<=personList-1;i++){
        let person = personList[i]
        let pname=''
        for(let j=0; j<=personList-1;j++){
            if(personList[j].pcode == person.pcode){
                pname = personList[j].pname;
                break;
            }
        }
        html += `<tr class="list1">
                        <td> <img src="${person.pimg}"/> </td>
                        <td> ${pname} </td> <td> ${pteam} </td> <td> ${position} </td>
                        <td>
                                <button class="updateBtn">수정</button> 
                                <button class="deleteBtn">삭제</button>
                        </td>
                </tr>
                <tr class="list1">
                        <td> <img src="${person.pimg}"/> </td>
                        <td> ${pname} </td> <td> ${pteam} </td> <td> ${position} </td>
                        <td>
                                <button class="updateBtn">수정</button> 
                                <button class="deleteBtn">삭제</button>
                        </td>
                </tr>
                <tr class="list1">
                        <td> <img src="${person.pimg}"/> </td>
                        <td> ${pname} </td> <td> ${pteam} </td> <td> ${position} </td>
                        <td>
                                <button class="updateBtn">수정</button> 
                                <button class="deleteBtn">삭제</button>
                        </td>
                 </tr>`
    }
}