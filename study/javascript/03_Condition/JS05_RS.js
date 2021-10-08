"use strict";

// 반복문

// 구구단 2~9단 출력
for (let i = 2; i <= 9; i++) {
    console.log(`${i}단`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }   
}