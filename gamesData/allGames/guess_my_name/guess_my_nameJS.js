const domGuess = {
    bottom_r: document.getElementById('bottom_r'),
    bottom_l: document.getElementById('bottom_l'),
    image: document.getElementById('image'),
    textInpWord: document.getElementById('textInpWord'),
    trueOrFalseInner:document.getElementById('trueOrFalseInner')
}
//
const naturalArry = ['flower', 'rainbow', 'clowd', 'river', 'sun', 'snow', 'moon', 'tree', 'leef', 'world']
let value = 0;
domGuess.bottom_l.onclick = function () {
    value = value + 1;
    domGuess.bottom_r.disabled = false;
    if (value > 9) {
        domGuess.bottom_l.disabled = true;
    }
    else {
        domGuess.image.src = '../assets/src/natural/' + naturalArry[value] + '.webp';
    }
    domGuess.bottom_r.onclick = function () {
        value = value - 1;
        domGuess.bottom_l.disabled = false;

        if (value < 1)
            domGuess.bottom_r.disabled = true;
        else
            domGuess.image.src = '../assets/src/natural/' + naturalArry[value] + '.webp';
    }
}
//
let wordSingle = '';
domGuess.textInpWord.onchange = () => {
    wordSingle = domGuess.textInpWord.value;
    // alert(wordSingle);
    check();
}
// alert(naturalArry[value] + "naturalArry[value]")

const check = () => {
    // alert('wordSingle ' + wordSingle)
    // alert(naturalArry[value] + "naturalArry[value]")
    if (wordSingle === naturalArry[value]) {
       domGuess. trueOrFalseInner.innerHTML='true';
       domGuess.textInpWord.value=' '
    //    domGuess.textInpWord.placeholder='your answer'

    }
    else {
        domGuess. trueOrFalseInner.innerHTML='false'
    }
    domGuess.textInpWord.value="";
}
