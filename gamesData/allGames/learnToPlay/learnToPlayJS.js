const domPlay = {
    Continer: document.getElementById('continer'),
    bbagContiner: document.getElementById('bagContiner'),
    // randomBtn: document.getElementById('rand-button'),
    randomBtnChoise: document.getElementById('rand-button-choise'),
    icone: document.getElementById('rand-button')
}
domPlay.randomBtnChoise.classList.remove('far');
const delBtn = () => {
    domPlay.icone.classList.remove('far');
    domPlay.randomBtnChoise.classList.add('far');

}
const arr = [];
const arrOfAllTheCorrectValues = [];
const arrRandomOnly = [];
const tavim = [{
    id: 1,
    names: 'do',
    src: './src/do.mp3'
}, {
    id: 2,
    names: 're',
    src: './src/re.mp3'
}, {
    id: 3,
    names: 'mi',
    src: './src/mi.mp3'
}, {
    id: 4,
    names: 'fa',
    src: './src/fa.mp3'
}, {
    id: 5,
    names: 'sol',
    src: './src/sol.mp3'
}, {
    id: 6,
    names: 'la',
    src: './src/la.mp3'
}, {
    id: 7,
    names: 'si',
    src: './src/la.mp3'
}];
const drawTav = (tavim, parent) => {
    const LiContiner = document.createElement('div');
    LiContiner.id = 'LiContinerClass';
    parent.appendChild(LiContiner);

    const txt = document.createElement('div');
    txt.id = "txt";
    LiContiner.appendChild(txt);

    const names = document.createElement('p');
    txt.appendChild(names);
    names.innerHTML = tavim.names;

    const button = document.createElement('button');
    button.type = 'sumbit';
    button.id = 'buttonId';
    button.class = 'buttonClass';
    button.innerHTML = ' ';
    LiContiner.appendChild(button);

    button.onclick = () => {
        arr.push(tavim.id);
        arrOfAllTheCorrectValues.push(tavim.id);
        // alert('arrOfAllTheCorrectValues ' + arrOfAllTheCorrectValues)
    }
}
const drawSingleTav = (tavim, parent) => {
    const audioTav = document.createElement('audio');
    audioTav.src = tavim.src;
    audioTav.innerHTML = 'tavvv';
    audioTav.controls = 'controls';
    // audioTav.loop = 'loop';
    audioTav.autoplay = 'autoplay';
    // txt.appendChild(audioTav);
}
tavim.forEach(element => {
    drawTav(element, domPlay.Continer);
});
const game = () => {
    random();

}
const deletearrOfAllTheCorrectValues = () => {
    arrOfAllTheCorrectValues.splice(0, arr.length);
}
const deleteArrRandom = () => {
    arrRandomOnly.splice(0, arrRandomOnly.length);
}
domPlay.icone.onclick = () => {
    delBtn();
    random();
}
function generateNumber(min, max) {
    let rand = Math.random();
    rand = Math.round(rand * (max - min));
    return rand + min;
}
const random = (event) => {
    const number = generateNumber(1, 7);
    console.log(number + ' the random is number');
    arrRandomOnly.push(number);
    //הצגת הרינדום
    // alert(tavim[number - 1].names);
    innerHtmlTav(tavim[number - 1])
    console.log('i am whait for check');
    domPlay.randomBtnChoise.onclick = () => {
        checkIfThisTrue();
    }
}
const innerHtmlTav = (t) => {
    tavName.innerHTML = t.names + ' , ';
}

const innerHtmFinishGame = (t) => {
    gameOver.innerHTML = 'Game Over ';
}
const innerHtmFinishGameNot = (t) => {
    gameOver.innerHTML = ' ';
}
const checkIfThisTrue = () => {
    let i = 0;
    for (i = arr.length - 1; i >= 0; i--) {
        const element = arrOfAllTheCorrectValues[i];
        if (element == arrRandomOnly[i]) {
            //להדפסת התווים
            arr.map(item => {
                const bag = tavim.find(t => t.id === item);
                setTimeout(() => {
                    drawSingleTav(bag, domPlay.bbagContiner);
                }, 1200 * i);
                console.log('ok')
            })
            innerHtmFinishGameNot();
        }
        else {
            console.log('eror   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
            innerHtmFinishGame();
            deleteArrRandom();
            console.log('!!!!' + arrRandomOnly + 'arrRandomOnly');
        }
        let iplace = i + 1;
        console.log(iplace + 'iplace');
        console.log('at finish for oyr aars is: ' + arrOfAllTheCorrectValues + ' ' + arrRandomOnly);
    }
    deletearrOfAllTheCorrectValues();
    console.log(arrOfAllTheCorrectValues + 'after d');
    console.log('go for game');
    console.log('at before new game oyr aars is: ' + arrOfAllTheCorrectValues + ' ' + arrRandomOnly);

    game();
}



