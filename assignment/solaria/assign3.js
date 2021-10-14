function call() {
    let id = document.getElementById('id');
    let pw = document.getElementById('pw');

    if (id.value == '') {
        alert('아이디을 입력하세요!')
        id.focus();
        return false;
    }
    if (pw.value == '') {
        alert('패스워드를 입력하세요!')
        pw.focus();
        return false;
    }

    location.href='assign3_1.html?id=' + id.value + '&pw=' +pw.value;
}