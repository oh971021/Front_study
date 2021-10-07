"use strict";
// 쓰면 좀 더 정확하게 지정해준다.

/*

    JS의 Type

    - number, string, boolean, null, undefinded, object, function, ... Java와는 조금 다름
    - number : 숫자를 담음 (정수, 실수 모두 담는다.)

    JS의 변수선언

    1. Let 
        - 

    2. Var 
        - global Scope (Hoisting) : 
        - 
*/

console.log('-------------------');

console.log(whyDontUse);
var whyDontUse = 1111;
console.log(whyDontUse);

console.log('-------------------');

// 이름, 나이, 키를 저장 후 콘솔에 출력

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