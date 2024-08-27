const domHome = {
    welcome: document.getElementById('welcome'),
    nameInp: document.getElementById("name"),
    passwordInp: document.getElementById("passwd"),
    form: document.querySelector("modal-content animate"),
    remember: document.getElementById("remember"),
    submit: document.getElementById("submit"),
    UseMyName: document.getElementById("UseMyName"),
    avatarDiv: document.getElementById('avatarDiv'),
    chooseAvatar: document.getElementById('chooseAvatar'),
    myAvatar: document.getElementById('myAvatar'),
    listAvatar: Array.from(document.querySelectorAll('.avatar')),
    lightOrBlack: document.getElementById('light'),
    body: document.getElementById('body'),
    disabled: document.getElementById('disabled'),
    icone: document.getElementById('icone')
}
domHome.lightOrBlack.onclick = () => {
    console.log(domHome.icone);
    if (domHome.body.classList == 'white') {
        domHome.icone.classList.remove('fa-toggle-on')
        domHome.icone.classList.add('fa-toggle-off')
        domHome.body.classList.remove('white')
        domHome.body.classList.add('black')
    }
    else {
        domHome.body.classList.remove('black')
        domHome.body.classList.add('white')
        domHome.icone.classList.remove('fa-toggle-off')
        domHome.icone.classList.add('fa-toggle-on')

    }
}
domHome.disabled.onclick = () => {
    if (domHome.body.classList == 'bigFont') {
        domHome.body.classList.remove('bigFont')
        domHome.body.classList.add('smallFont')
    }
    else {
        domHome.body.classList.remove('smallFont')
        domHome.body.classList.add('bigFont')
    }
}
let userName = "DEFAULT";
let pswName = "DEFAULT";
domHome.UseMyName.onclick = (event) => {
    const y = localStorage.getItem("userName");
    domHome.nameInp.name = y;
    domHome.nameInp.placeholder = y;
    domHome.nameInp.value = y;

    const x = localStorage.getItem("pswName");
    domHome.passwordInp.name = x;
    domHome.passwordInp.placeholder = x;
    domHome.passwordInp.value = x;
}
if (domHome.form) {
    domHome.form.onsubmit = () => {
        userName = domHome.nameInp.value;
        pswName = domHome.passwordInp.value;
    }
}
if (domHome.welcome) {
    if (domHome.welcome.innerHTML === "שלום אורח") {
        domHome.welcome.innerHTML = "שלום " + sessionStorage.getItem("userName");
        domHome.myAvatar.src = sessionStorage.getItem("userAvatar")
    }
}
// domHome.remember.checked = () => {
domHome.remember.onclick = () => {
    localStorage.setItem("userName", domHome.nameInp.value);
    localStorage.setItem("userPassword", domHome.passwordInp.value);
    localStorage.setItem("userAvatar", domHome.avatarDiv.src);
    event.preventDefault();

}

domHome.submit.onclick = (event) => {
    event.preventDefault();
    sessionStorage.setItem("userName", domHome.nameInp.value);
    sessionStorage.setItem("userPassword", domHome.passwordInp.value);
    sessionStorage.setItem("userAvatar", domHome.avatarDiv.src);
    location.href = "./homeAndLogin.html";
}
sessionStorage.setItem("userAvatar", domHome.avatarDiv.src)
domHome.listAvatar.forEach(event => {

    event.onclick = () => {
        domHome.listAvatar.forEach(event => {
            event.classList.remove('selectAvatar');
            event.classList.add('avatar');
        })

        event.classList.add('selectAvatar');
        event.classList.remove('avatar');

        sessionStorage.setItem("userAvatar", event.src);
        const avi = sessionStorage.getItem("userAvatar");
        domHome.myAvatar.src = avi;
        domHome.avatarDiv.src = avi;
    }

});
// 
const references = [];
const referencesList = document.getElementById('reference-list');
function addReferences(Ref, description) {
    const referenceId = 'task' + generateTaskId();
    const ref = {
        id: referenceId,
        owner: Ref,
        description: description,
    }
    createReferences(ref);
    references.push(ref);
    console.log(references);
    // Ref.classList.add('reClass')

}
function createReferences(r) {
    const li = document.createElement('li');
    li.id = r.id;
    console.log(li);
    referencesList.appendChild(li);
    const refr = document.createElement('div');

    refr.onchange = function (event) {
        console.log(event);

        const currentReferences = findReferences(event.target.parentNode.id);
        currentReferences.isDone = event.target.checked;
        console.log(references);
    }

    li.appendChild(refr)
    console.log(refr);

    const span = document.createElement('span');

    span.innerHTML = r.description + ' ' + r.owner;

    li.appendChild(span);
    console.log(span);
}

const findReferences = function (referenceId) {

    const currentReferences = references.find(function (ref) {
        return ref.id === referenceId;
    })
    return currentReferences;
}

function newtReferences() {
    const refOwner = document.getElementById('owner');
    const refer = document.getElementById('task');
    const newReferBtn = document.getElementById('new-task-btn');
    newReferBtn.onclick = function (event) {
        addReferences(refOwner.value, refer.value);
        refer.value = '';
        taskOwner.value = '';
    }
}
let id = 0;
const generateTaskId = function () {
    return id++;
}

addReferences('עלמה', 'הי, הבן שלי למד דרככם בחופש , והאנגלית שלו השתפרה פלאים!!!');
addReferences('יאיר', 'הציונים שלי עלו משמעותית');
addReferences('עופרה', 'גיליתי את האתר שלכם, ומאז לא הפסקתי להתקדם!!   ');
addReferences('סיוון', '   אני מורה בכיתה ה יסודי, ובזכותכם התלמידים מרוויחים חוייות באנגלית!');
addReferences('יורם', '  ממוכר...:)');
newtReferences();