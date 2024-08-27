const domQuiz = {
    quizContainer: document.getElementById('quizContainer'),
    sub: document.getElementById('sub'),
    btn: document.getElementById('btn'),
}
// alert("sub: " + domQuiz.sub.innerHTML)
domQuiz.btn.onclick = async () => {
    const div = document.createElement('div');
    div.innerHTML = 'השלם את התרגום למילה לסיום אשר את הבוחן'
    domQuiz.quizContainer.appendChild(div);

    const h2 = document.createElement('h2');
    domQuiz.quizContainer.appendChild(h2);
    h2.innerHTML = "Translate The Words"

    const h3 = document.createElement('h3');
    domQuiz.quizContainer.appendChild(h3);
    h3.innerHTML = "Your score: "

    const score = document.createElement('p');
    score.id = 'score';
    h3.appendChild(score);
    score.innerHTML = "0"

    const SubVocabulary = await getSubjectVocabulary();

    SubVocabulary.forEach(element => {
        // <label for="q">qustion 1</label>
        const quizQ = document.createElement('label');
        quizQ.classList.add('quizQ');

        quizQ.for = element.word;
        quizQ.innerHTML = element.translate;
        domQuiz.quizContainer.appendChild(quizQ);

        // <input type="text" name="q">
        const quizA = document.createElement('input');
        quizA.classList.add('quizA')
        quizA.type = "text";
        quizA.name = element.word;
        domQuiz.quizContainer.appendChild(quizA);

        const mark = document.createElement('div');
        mark.classList.add('mark');
        domQuiz.quizContainer.appendChild(mark);

        const br = document.createElement('br');
        domQuiz.quizContainer.appendChild(br);

    });

    const submitQuiz = document.createElement('button');
    submitQuiz.id = 'submitQuiz';
    submitQuiz.innerHTML = "submitQuiz";
    domQuiz.quizContainer.appendChild(submitQuiz);
    const submitQuizBtn = document.getElementById('submitQuiz');
    submitQuizBtn.onclick = (event) => {
        event.preventDefault()
        checkQuiz();
        stasi();
        setTimeout(() => {
            location.href = '/gamesData/gamesData.html'
        }, 1000);

    }
}
const getSubjectVocabulary = () => $.ajax({
    url: "../json/" + domQuiz.sub.innerHTML + ".json",
    //domQuiz.sub.innerHTML
    success: (result) => {
        console.log("result", result);
        return result;
    },
    error: (error) => {
        console.error(error);
    }
});

const checkQuiz = async () => {
    const SubVocabulary = await getSubjectVocabulary();

    const QuestionsArry = Array.from(document.getElementsByClassName('quizQ'));
    const AnswersArryInp = Array.from(document.getElementsByClassName('quizA'));
    const AnswersArry = [];
    AnswersArryInp.forEach((element) => {
        AnswersArry.push(element.value)
    })
    let score = 100;
    let i = 0;
    SubVocabulary.forEach(element => {
        if (element.word === AnswersArry[i]) {
            document.getElementById('score').innerHTML = score;

        }
        else {
            score -= 10;
            document.getElementById('score').innerHTML = score;
        }
        i++;
    });
}
//time
const maxTime = 990000;
let stopWatch = 0;
setInterval(() => {
    stopWatch++;
    document.getElementById('stop-watch').innerHTML = ('0' + Math.floor(stopWatch / 60)).slice(-2) + ':' + ('0' + (stopWatch % 60)).slice(-2);
}, 1000);
setTimeout(() => {
    stasi();
    location.href = '/gamesData/gamesData.html'
}, maxTime);
localStorage.setItem("MinTime", 1000);
localStorage.setItem("MaxPoint", 0);
const stasi = () => {
    // alert('set data' +document.getElementById('score').innerHTML)
    // // הזמן הכי קצר - השיא
    const prevTime = localStorage.getItem("MinTime");
    localStorage.setItem("MinTime", Math.min(prevTime, stopWatch));
    // // מה הזמן שלך
    sessionStorage.setItem("MyTime", stopWatch);
    //בנקודות ומה השיא
    const prevPoint = localStorage.getItem("MaxPoint");
    localStorage.setItem("MaxPoint", Math.max(prevPoint, score.innerHTML));
    // כמה נקודות יש לך 
    sessionStorage.setItem("MyPoint", score.innerHTML);
};





