"use strict";

function call() {
    console.log('준석');
    console.log(25);
}

function call2() {
    let j = 2;
    console.log(`${j}단 출력!!`)
    for (let i = 1; i <= 9; i++) {
        console.log(`${j} x ${i} = ${i*j}`)
    }
}

// 숫자를 2개 넣으면 합을 출력해주는 함수
function add(a, b) {
    console.log(a + b);
}

// 넣은 숫자의 단을 출력해주는 함수
function callGuGuDan(n) {
    for(let i = 1; i < 10; i++) {
        console.log(n + 'x' + i + '=' + n*i);
    }
}