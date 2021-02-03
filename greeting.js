const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();//event is prevented. enter will not work.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    console.log(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // it removes form and displays greeting.
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
        //she is not
    }else{
        paintGreeting(currentUser);
        //she is
    }
}
function init(){
    loadName();
}
init();