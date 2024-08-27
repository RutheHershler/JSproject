const domLogin= {
    nameInp: document.getElementById("name"),
    passwordInp: document.getElementById("passwd"),
    form: document.querySelector("modal-content animate"),
  //  remember: document.getElementById("remember"),
    submit: document.getElementById("submit"),//enter
    UseMyName: document.getElementById("UseMyName"),//ok
    //avatar: document.getElementById('imgcontainerID'),

}
let userName = "DEFAULT";
let pswName = "DEFAULT";
domLogin.UseMyName.onclick = (event) => {
    const y = localStorage.getItem("userName");
    domLogin.nameInp.name = y;
    domLogin.nameInp.placeholder = y;
    domLogin.nameInp.value = y;

    const x = localStorage.getItem("pswName");
    domLogin.passwordInp.name = x;
    domLogin.passwordInp.placeholder = x;
    domLogin.passwordInp.value = x;

    event.preventDefault();
}
if (domLogin.form) {
    domLogin.form.onsubmit = () => {
        userName = domLogin.nameInp.value;
        pswName = domLogin.passwordInp.value;
    }
}
if (domLogin.welcome) {
    domLogin.welcome.innerHTML += localStorage.userName;
}
domLogin.submit.onclick = (event) => {
    event.preventDefault();
    localStorage.setItem("userName", domLogin.nameInp.value);
    localStorage.setItem("userPassword", domLogin.passwordInp.value);
    location.href = "../Home.html";
}

// domLogin.remember.checked = () => {
//     localStorage.setItem("userName", domLogin.nameInp.value);
//     localStorage.setItem("userPassword", domLogin.passwordInp.value);
// }
avatar= document.getElementById('imgcontainerID');

avatar.onclick = () => {
    console.log('hi avatar');
     location.href = "../chooseAvatar/chooseAvatar.html";
}