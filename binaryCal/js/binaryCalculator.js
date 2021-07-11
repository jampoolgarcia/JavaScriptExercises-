document.getElementById('btn1').onclick = function() {
    document.getElementById('res').innerHTML += '1';
};

document.getElementById('btn0').onclick = function() {
    document.getElementById('res').innerHTML += '0';
};

document.getElementById('btnClr').onclick = function() {
    document.getElementById('res').innerHTML = '';
};

document.getElementById('btnEql').onclick = function() {

    let elem = document.getElementById('res').innerHTML;

    if (/\d+[+]\d+/.test(elem)) {
        let binaris = elem.split('+');
        let result = parseInt(binaris[0], 2) + parseInt(binaris[1], 2);
        document.getElementById('res').innerHTML = result.toString(2);
    } else if (/\d+[-]\d+/.test(elem)) {
        let binaris = elem.split('-');
        let result = parseInt(binaris[0], 2) - parseInt(binaris[1], 2);
        document.getElementById('res').innerHTML = result.toString(2);
    } else if (/\d+[*]\d+/.test(elem)) {
        let binaris = elem.split('*');
        let result = parseInt(binaris[0], 2) * parseInt(binaris[1], 2);
        document.getElementById('res').innerHTML = result.toString(2);
    } else if (/\d+[/]\d+/.test(elem)) {
        let binaris = elem.split('/');
        let result = parseInt(binaris[0], 2) / parseInt(binaris[1], 2);
        document.getElementById('res').innerHTML = result.toString(2);
    }

};


document.getElementById('btnSum').onclick = function() {

    let elem = document.getElementById('res').innerHTML;

    if (!(/[*\/+-]/.test(elem))) {
        document.getElementById('res').innerHTML += '+';
    }
};

document.getElementById('btnSub').onclick = function() {
    let elem = document.getElementById('res').innerHTML;

    if (!(/[*\/+-]/.test(elem))) {
        document.getElementById('res').innerHTML += '-';
    }
};

document.getElementById('btnMul').onclick = function() {
    let elem = document.getElementById('res').innerHTML;

    if (!(/[*\/+-]/.test(elem))) {
        document.getElementById('res').innerHTML += '*';
    }
};

document.getElementById('btnDiv').onclick = function() {
    let elem = document.getElementById('res').innerHTML;

    if (!(/[*\/+-]/.test(elem))) {
        document.getElementById('res').innerHTML += '/';
    }
};