const dom = {
    squre: Array.from(document.getElementsByClassName('squre')),
    squreColor: Array.from(document.getElementsByClassName('squre_color')),
    score: document.getElementById('score'),
}
let color = 'red';
dom.squreColor.forEach((s) => {
    s.draggable = true;
    s.ondragstart = (event) => {
        console.log(s.id)
        color = s.id;
    };
});
let colorCnt = 0;
let score = 0;
const generateNumber = (min, max) => {
    let rand = Math.random();
    rand = Math.round(rand * (max - min));
    return rand + min;
}
dom.squre.forEach((s) => {
    s.innerHTML = dom.squreColor[generateNumber(0, dom.squreColor.length - 1)].id;
});
dom.squre.forEach((s) => {
    s.ondragenter = () => {
        if(!(s.classList.contains('active')))
        colorCnt++;

        s.style.backgroundColor = color;
        s.classList.add('active')
        if (color == s.innerHTML) {
            console.log('score color');
            score += 5;
            dom.score.innerHTML = 'score ' + score;
        }
        else {
            console.log('worng color');
            if(score>=5)
            score -= 5;
            dom.score.innerHTML = 'score ' + score;
        }
        if (colorCnt === dom.squre.length) {
            alert('the game is over (finish)')
            location.href ='../quiz/AllQuizes/QuizColor.html'

        }
    }
})

//time
const maxTime = 1000000000;
let stopWatch = 0;
setInterval(() => {
    stopWatch++;
    document.getElementById('stop-watch').innerHTML = ('0' + Math.floor(stopWatch / 60)).slice(-2) + ':' + ('0' + (stopWatch % 60)).slice(-2);
}, 1000);
setTimeout(() => {
    alert('the game is over (time)')
    location.href ='../quiz/AllQuizes/QuizColor.html'

}, maxTime);




