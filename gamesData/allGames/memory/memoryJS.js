const domMemory = {
    body: document.querySelector('body'),
    cardContainers: Array.from(document.querySelectorAll('.card-container')),
    imgs: Array.from(document.querySelectorAll('img')),
}
console.log(domMemory.cardContainers);
console.log(domMemory.imgs);
let pairsAmount = document.getElementById('pairs-amount');
const chosenCards = [];

for (let i = 0; i < domMemory.cardContainers.length; i++) {
    let i1 = Math.floor(Math.random() * (domMemory.cardContainers.length - 1));
    console.log(i1);
    let src = domMemory.imgs[i].src;
    console.log(src);
    domMemory.imgs[i].src = domMemory.imgs[i1].src;
    domMemory.imgs[i1].src = src;
    const card = domMemory.cardContainers[i];
    card.onclick = function () {
        if (chosenCards.length < 2) {
            domMemory.imgs[i].classList.remove('hidden-card');
            chosenCards.push(domMemory.imgs[i]);
        }
        if (chosenCards.length == 2) {
            if (check()) {
                console.log("yes");
                pairsAmount.innerHTML++;
                removecard();
                if (pairsAmount.innerHTML == 10) {
                    location.href ='../quiz/AllQuizes/QuizAnimal.html'
                }
                else
                    chosenCards.pop();
                chosenCards.pop();
            }
            else {
                setTimeout(() => {
                    chosenCards[0].classList.add('hidden-card');
                    chosenCards[1].classList.add('hidden-card');
                    chosenCards.pop();
                    chosenCards.pop();
                }, 900);
            }
            console.log(chosenCards);
        }
    }
}
function check() {
    if (chosenCards[0].src[chosenCards[0].src.lastIndexOf('/') + 1] == chosenCards[1].src[chosenCards[1].src.lastIndexOf('/') + 1])
        return true;
    return false;
}
function removecard() {
    for (let i = 0; i < chosenCards.length; i++) {
        chosenCards[i].classList.add('extract-card');
    }
}
const maxTime =100000;
let stopWatch = 0;
setInterval(() => {
    stopWatch++;
    document.getElementById('stop-watch').innerHTML = ('0' + Math.floor(stopWatch / 60)).slice(-2) + ':' + ('0' + (stopWatch % 60)).slice(-2);
}, 1000);
setTimeout(() => {
    location.href ='../quiz/AllQuizes/QuizAnimal.html'

}, maxTime);