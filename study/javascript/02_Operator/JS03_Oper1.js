"use strict";

let a = 1;
let b = "1";
// number + string = string ( number 는 자동 문자변환된다. )
console.log(a+b);

// 자료형이 다이나믹하게 정해지기 때문에
// 연산을 사용하면 string을 number로 변경시켜준다.
console.log(a/b);
console.log(a-b);
console.log(a*b);

// 산술 연산자 : +.-.*./
let x = 2;
let y = 5;

let hab = x + y;
let cha = x * y;
let mul = x - y;

// 문자 연산자
let hi = "hi";
let hello = "hello"

console.log(hi-hello); // NaN ( Not a Number)

// 복합 연산자 : 증감 ++ , 차감 --
x = x + 1;
console.log(x);
x += 1;
console.log(x);
x++;
console.log(x);