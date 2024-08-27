const dom = {
    squre: Array.from(document.getElementsByClassName('squre-border-game')),
    squreDrop: Array.from(document.getElementsByClassName('squre-border-game-for-drop')),
}
for (let i = 0; i < dom.squreDrop.length; i++) {

    let i1 = Math.floor(Math.random() * (dom.squreDrop.length - 1));
    console.log(i1);
    let val = dom.squreDrop[i].innerHTML;
    console.log(val);
    dom.squreDrop[i].innerHTML = dom.squreDrop[i1].innerHTML;
    dom.squreDrop[i1].innerHTML = val;
}
// 

let gorer;
dom.squreDrop.forEach((M) => {
    M.draggable = true;
    M.ondragstart = (event) => {
        const MID = M.innerHTML;
        gorer = MID;
        console.log(gorer + "gorer");
        console.log(MID + " i am M . id    dom.squreDrop.forEach");

        deleteFromSqore = () => {
            M.innerHTML = " ";
            M.classList.remove('squre-border-game-for-drop');
            // M.classList.add('squre-without-solid');
            // M.style.backgroundColor = 'black';
        }
    };
});
restatrt = () => {
    console.log('restatrt');
}
console.log(gorer + "gorer");
let nigrar;
dom.squre.forEach((s) => {

    s.ondragenter = (event) => {
        event.preventDefault();
        check = (ss, mm) => {
            console.log('now i check')
            console.log(ss + " i am s . id 333");
            console.log(mm + " i am m . id 333");
            if (ss === mm) {

                // isFinish();
                console.log('good');
                s.innerHTML = ss;
                deleteFromSqore();
                restatrt();
            }
            else {
                console.log('error');
            }
        }
    };
    s.ondrop = (event) => {
        event.preventDefault();
    };
    s.ondragover = (event) => {
        const SID = s.id;
        nigrar = SID;
        console.log(nigrar + "nigrar");
        console.log(SID + " i am S . id11111111111111");
        check(nigrar, gorer);
    }

});
console.log(nigrar + "nigrar");

isFinish = () => {
    squre.forEach(element => {
        alert(element)
        if (element.innerHTML == null) {
            alert(element.innerHTML == null)
            return false;
        }
        return true;
    });
}
//time
const maxTime = 1000000000;
let stopWatch = 0;
setInterval(() => {
    stopWatch++;
    document.getElementById('stop-watch').innerHTML = ('0' + Math.floor(stopWatch / 60)).slice(-2) + ':' + ('0' + (stopWatch % 60)).slice(-2);
}, 1000);
setTimeout(() => {
    alert('the game is over (time)')
    location.href = '/gamesData/gamesData.html'

}, maxTime);