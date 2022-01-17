const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



//보내는 기능
function onLoginSubmit(event) {
    event.preventDefault(); // 기본기능인 페이지 새로고침을 막아줌.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    console.log(username);
}
// 받는 기능
function paintGreetings(username){ //여기서 username 자리는 argument 자리
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}
//버튼 눌리는거

//조건 username=null 로 따라서 보내고 받는거
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    //로그인폼
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //기능확인
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    //다음화면
    paintGreetings(savedUsername);
}