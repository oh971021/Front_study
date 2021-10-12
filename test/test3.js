// URL로 받은 파라미터 값 이용하기

function getParameterByName(name) { 
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), 
        results = regex.exec(location.search); 
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); 
}

let name = getParameterByName('a');
let id = getParameterByName('b');
let pw = getParameterByName('c');

// 파라미터로 받는 값은 문자열로 들어온다.
let aa = getParameterByName('aa');
let bb = getParameterByName('bb');
// 그래서 계산식을 사용할 때는 형 변환을 이용해야한다.
// 형 변환은 두가지의 방법이 있다.
let cc = parseInt(aa) + Number(bb);

// alert(name);
// alert(id);
// alert(pw);

// 화면에 표시하기
document.write(
    '<h1>이름 : ' + name + '</h1>' +
    '<h1>ID : ' + id + '</h1>' +
    '<h1>PW : ' + pw + '</h1>' +

    '<h1> 값 : ' + cc + '</h1>'
)