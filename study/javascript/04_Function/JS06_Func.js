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

function printGugudan2() {
    let myInput = document.myForm.i1;
    let myValue = myInput.value;

    alert(`${myValue}단을 출력합니다`);

    for (let i = 1; i < 10; i++) {
        console.log(myValue + ' x ' + i + ' = ' + myValue*i)
    }

    // 디테일 잡기

    // input 박스 값 초기화 시켜주기
    myInput.value = "";

    // input 박스에 포커스를 잡아주기
    myInput.focus();

    // return 사용 이유 ?
    // Form Tag를 사용했기 때문이다.
    // 원래 submit 하면 어딘가로 제출이 된다.
    // 그래서 어딘가로 사라지지않고 머무르기 위해서
    return false;
}