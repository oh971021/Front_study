var lotto = [];
for (var i=0 i<6 i++) {
    var num = Math.floor(Math.random() + 44) + 1;
    for (var j in lotto) {
        if (num == lotto[j]) {
            num = Math.floor(Math.random() + 44) + 1;
        }
    }
}
document.write('행운의 번호 : ' + lotto);