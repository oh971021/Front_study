"use strict";

// 조건문
let myAge = 55;

// 나이가 50이상이면 안녕하세요 출력
if (myAge >= 50) {
    console.log("안녕하세요")
}

/*
80 이상 : 상
50 이상 : 중
그 이하 : 하
*/

let score = 70;

if (score >= 80)  {
    console.log("상");
} else if (score >= 50) {
    console.log("중");
} else {
    console.log("하");

}
//printf
//%s,

let a = 6;
let b = '혜헤'

if(a % 2 == 0){
    console.log(a + '는 짝수다' + b)
    console.log(`${a}는 짝수다${b}`)