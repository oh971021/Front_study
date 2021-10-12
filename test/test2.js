function call() {
    // HTML에 작성 된 input 박스의 데이터를 가져오기
    let i1 = document.getElementById('i1');
    let i2 = document.getElementById('i2');
    let i3 = document.getElementById('i3');
    
    // alert(i1.value);
    // alert(i2.value);
    // alert(i3.value);

    if (i1.value == '') {
        alert('이름을 입력하세요!')
        i1.focus();
        return false;
    }
    if (i2.value == '') {
        alert('ID를 입력하세요!')
        i2.focus();
        return false;
    }
    if (i3.value == '') {
        alert('PW를 입력하세요!')
        i3.focus();
        return false;
    }

    // test3.html 뒤에 붙는 ?는 연결해주는 접속사 느낌
    // ? : 링크와 파라미터를 구분해줌
    // a 뭐시기 뭐시기는 파라미터.
    // 그리고 원래는 세미콜론(;)으로 끝나야하지만
    // &로 끝나는 것은 URL 문법이니까 외우기
    // 그리고 여기다가 i1, i2, i3 의 값을 넣을 예정
    // test3에서 그 값들을 사용하려고
    location.href='test3.html?a=' + i1.value + '&b=' + i2.value + '&c=' + i3.value
}