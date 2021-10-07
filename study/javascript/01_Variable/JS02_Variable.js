"use strict";
// 쓰면 좀 더 정확하게 지정해준다.

/*

    JS의 Type

    - number, string, boolean, null, undefinded, object, function, ... Java와는 조금 다름
    - number : 숫자를 담음 (정수, 실수 모두 담는다.)

    JS의 변수선언

    1. Let 
        - var와 같은 기능이지만 Scope가 다름

    2. Var 
        - global Scope (Hoisting) : 
        - 어디서든 사용가능한 문제점이 있다.
*/

console.log('-------------------');

console.log(whyDontUse);
var whyDontUse = 1111;
console.log(whyDontUse);

console.log('-------------------');

var test;
console.log(test);

console.log('-------------------');

{
    // Let 은 블럭 밖에서 사용 불가능하지만
    // let whyDontUse2;
    // Var 는 어디에 위치하든 어디서든 사용 가능하다.
    var whyDontUse2;
    whyDontUse2 = 2222;
    console.log(whyDontUse2);
}

console.log(whyDontUse2);

console.log('-------------------');

// 이름, 나이, 키를 저장 후 콘솔에 출력

let myName = "오준석";
let myAge = 25;
let myHeight = 178;

console.log(myAge);
console.log(myHeight);

// --------------------------------- //

// 문자열 String

let q = "Hey";
let w = "you";
let e = "where are you from?";

console.log(q);
console.log(w);
console.log(e);

// 쉼표로하면 띄어쓰기가 포함 된다.
console.log(q,w,e);

// 더하기로하면 다 붙어서 나온다.
console.log(q+w+e);

// 길이 확인은 length
console.log(e.length);

// 인덱스에 맞는 글자수 뽑기
console.log(e.charAt(3));

// 글자가 몇번째 인덱스에 있는지 확인하기
console.log(e.indexOf('h'));

// a -> b 로 글자 변경
// 바뀐 글자가 저장되지는 않는다.
console.log(e.replace('are', 'r'));

console.log(e);

// --------------------------------- //

// boolean

console.log('-------------------');

let r = true;
let t = false;

console.log(typeof r);

let rt = 3 > 5;
console.log(rt);

console.log('-------------------');

// 이름 : ㅇㅇ
// 나이 : ㅇㅇ

console.log("이름 : "+myName, "\n나이 : "+myAge);

console.log('-------------------');