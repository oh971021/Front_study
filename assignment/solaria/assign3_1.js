function getParameterByName(name) { 
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), 
        results = regex.exec(location.search); 
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); 
}

let id = getParameterByName('id');
let pw = getParameterByName('pw');

document.write(
    '<h1> ID : ' + id + '</h1>' +
    '<h1> PW : ' + pw + '</h1>'
)