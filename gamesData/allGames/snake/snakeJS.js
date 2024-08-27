const dom = {
    squer: Array.from(document.getElementsByClassName('squer')),
    arrow: Array.from(document.getElementsByClassName('arrow')),
    says_score: document.getElementById('says_score'),
    says_chatch_the: document.getElementById('says_chatch_the'),
}
const sqwerWidth = Math.sqrt(dom.squer.length);
const fruit = ['apple', 'grapes', 'banana'];
let score = 0;
let snakeLocationX = 0;
let snakeLocationY = 0;
let snakePlaceNow = 0;

let toChatch;
const generateNumber = (min, max) => {
    let rand = Math.random();
    rand = Math.round(rand * (max - min));
    return rand + min;
}
const FindFruitPlace = (location) => {
    let x = generateNumber(0, dom.squer.length - 1);
    while (dom.squer[x].classList.contains("active")) {
        x = generateNumber(0, dom.squer.length - 1);
    }
    location = x;
    return location;
}
const FindSnakePlace = () => {
    let x = generateNumber(0, sqwerWidth-1);
    let y = generateNumber(0, sqwerWidth-1);
    snakeLocationX = x;
    snakeLocationY = y;
    snakePlaceNow = (sqwerWidth * snakeLocationX) + snakeLocationY;
    dom.squer[snakePlaceNow].id = 'snake';
    dom.squer[snakePlaceNow].classList.add('active')
    console.log('snakeLocation [' + snakePlaceNow + "]");
}
const WhotoChatch = () => {
    toChatch = fruit[generateNumber(0, fruit.length - 1)];
    dom.says_chatch_the.innerHTML = toChatch;
}
const startGame = () => {
    FindSnakePlace();
    fruit.forEach(e => {
        const p = FindFruitPlace(e + "Location");
        dom.squer[p].classList.add('active')
        dom.squer[p].classList.add(e);
        console.log(e + 'Location [' + p + ']');
    });
    WhotoChatch();
}
dom.arrow.forEach((s) => {
    s.onclick = () => {
        if (s.id === 'arrow1' && snakeLocationY > 0) {
            snakeLocationY -= 1;
        }
        else if (s.id === 'arrow2' && snakeLocationX > 0) {
            snakeLocationX -= 1;
        }
        else if (s.id === 'arrow3' && snakeLocationX < sqwerWidth) {
            snakeLocationX += 1;
        }
        else if (s.id === 'arrow4' && snakeLocationY < sqwerWidth) {
            snakeLocationY += 1;
        }
        check();
    }
})
const check = () => {
    dom.squer[(sqwerWidth * snakeLocationX) + snakeLocationY].id = 'snake';

    console.log("new snake location: [" + snakeLocationX + "," + snakeLocationY + "]")
    dom.squer[snakePlaceNow].classList.remove('active');
    dom.squer[snakePlaceNow].id = '';
    if (dom.squer[snakePlaceNow].classList.contains(toChatch) == true) {
        console.log('snake catch the ' + toChatch);
        dom.squer[snakePlaceNow].classList.remove(toChatch);

        let newLocation = FindFruitPlace(snakePlaceNow);
        while (dom.squer[newLocation].classList.contains('active'))
            newLocation = FindFruitPlace(snakePlaceNow);
        dom.squer[newLocation].classList.add(toChatch);

        console.log('new ' + toChatch + ' place [' + newLocation + "]");
        WhotoChatch();

        score++;
        dom.says_score.innerHTML += '❤';
        if (score == 10) {
            alert('the game is over')
            location.href ='../quiz/AllQuizes/QuizFruit.html'
        }
    }
    snakePlaceNow = (sqwerWidth * snakeLocationX) + snakeLocationY;
    dom.squer[snakePlaceNow].classList.add('active');
    dom.squer[snakePlaceNow].id = 'snake';

}

startGame();