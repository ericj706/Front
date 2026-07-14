let html = "";
let floor = 10;
let 공백 = "&nbsp;"
// 위쪽 피라미드
for (let i = 1; i <= floor; i++) {
    // 공백
    for (let j = 1; j <= floor - i; j++) {
        html += 공백;
    }
    // 별
    for (let j = 1; j <= i; j++) {
        html += "* ";
    }
    html += "<br>";
}

// 아래쪽 역피라미드
for (let i = floor - 1; i >= 1; i--) {
    // 공백
    for (let j = 1; j <= floor - i; j++) {
        html += 공백;
    }
    // 별
    for (let j = 1; j <= i ; j++) {
        html += '* ';
    }
    html += "<br>";
}

document.querySelector("h3").innerHTML = html;