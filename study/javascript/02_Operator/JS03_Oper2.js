"use strict";

console.log("------------");

// 논리 연산자 : >, >=, <, <=, ==, !=

// 결합 연산자 : &&, ||, !

/* 삼항 연산자 : 둘 중 하나 값 출력
- 조건식 ? true : false */

// 나이가 10살 
let age = 5;
let result = (age > 10) ? "welcome" : "go home";

console.log(result);
console.log(typeof(result));

console.log("------------");

// 입장료
let ticket = 10000;

// 할인
// 나이가 10살 넘으면 1000원, 안넘으면 3000원
let discount = (age > 10) ? "1000" : "3000"

// 총금액
let total = ticket - discount;
console.log(total);

console.log("------------");

// 같다 : == , === 
let strNum = "10";
let numNum = 10;
let floNum = 10.0;

// == : 자료형 상관없이 값만 본다.
console.log(strNum == numNum);
console.log(floNum == numNum);
console.log(floNum == strNum);

// === : 자료형에 따라 값을 출력한다.
console.log(floNum === strNum);
console.log(floNum === strNum);
console.log(floNum === strNum);

console.log("------------");

// Object : 객체
let me1 = {name : 'Mr.Oh', age : 20}; // 객체 생성은 중갈호를 열닫하면 됨.
let me2 = {name : 'Mr.Oh', age : 20}; 
let me3 = me1;

// 객체는 주소값을 가지는 변수다.
// 스택에 주소값을 가진 변수가 생기고, 호출될 때 힙영역에 실존객체가 생긴다.
console.log(me1 == me2);
console.log(me1 == me3);

console.log("------------");

// == 와 === 의 큰 차이는 타입을 보냐 안보냐에 있다.

// js 에서 0과 false는 같은 의미
console.log(0 == false);
// 하지만 타입은 다르다.
console.log(0 === false);
// 아래의 내용도 위와 같다.
console.log(null == undefined);
console.log(null === undefined);
console.log("" == false);
console.log("" === false);