// 연산결과는 항상 한개

// 분기 / 조건문 : 상황에 따라 흐름 분기 / 제어
    // 비가 오면 우산 챙기고 비가 안오면 우산 두고간다
    // 프로젝트 / 실무 : 어떤 상황에 따른 기능 설정 판단

// 1. if문 : if(조건식) 실행문 , 조건식 결과 true면 실행문 처리
if( 10 > 3 ) console.log( "10은 3보다 크다.")
if(10 > 30) console.log("10은 30보다 크다")  //fail

// 2. if문 : if(조건식) {실행문; 실행문;} , 실행문이 2개 이상이면 { }로 묶는다.
if( 10 > 3 ) {
    console.log( "10은 3보다 크다.")
    console.log("[2]")
}

// 3. if문 : 조건식 결과 true, false 분기처리
if( 10 > 3){console.log('10은 3보다 크다'); }
else{console.log('10은 3보다 작다'); }

// 4. if문 ~ else if ~ else if ~ else : 다수 조건에 따른 하나의 결과만 처리
if(10 > 3){console.log('10은 3보다 크다');}
else if( 10 > 2 ) { console.log ('10은 2보다 크다');}
else if( 10 > 1 ) { console.log ('10은 1보다 크다');}
else{console.log('거짓');}
// vs if if if : 다수 조건에 따른 다수 결과를 처리
if(10 > 3){console.log('10은 3보다 크다');}
if(10 > 2){console.log('10은 2보다 크다');}
if(10 > 1){console.log('10은 1보다 크다');}
else{console.log('거짓');}

// 5. 중첩 if 
let 성별 = "남" ; let 점수 = 90
if(성별 = '여' ){   // 만약에 성별이 '여' 이면
    if(점수 >= 80){
        console.log('여학생 우수') // '여' 이면서 점수가 80 이상이면
    }else{          
        console.log('여학생')     // 80점 이상이 아니면
    }              
}else{              // 만약에 성별이 '남' 이면
    if(점수 >= 80){ 
        console.log('남학생 우수')
    }else{
        console.log('남학생')
    }
}
