function cal() {
    let birth = document.getElementById('age');
    let age = calcAge(birth.value);

    alert('만 나이는 : '+ age +'살 입니다.');
}

function calcAge(birth) {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1);
    var day = date.getDate();       
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    var monthDay = month + day;
    birth = birth.replace('-', '').replace('-', '');
    var birthdayy = birth.substr(0, 4);
    var birthdaymd = birth.substr(4, 4); 
    var age = monthDay < birthdaymd ? year - birthdayy - 1 : year - birthdayy;
    return age;
} 