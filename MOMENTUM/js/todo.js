//get 설정 toDoForm, toDoList, toDoInput(input의 value)
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//saveToDos 기능 string으로 바꿔줘서 보내면 배열로 저장됨
const TODOS_KEY = "todos";

//toDos, 배열 
let toDos = []; //저장시킴

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));// string으로 변환 시켜줌
  }

// deleteTodo 기능
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }

//paintToDo li,span (element)만들기, 요소(자리) newTodo 걸 받는 역할, li 안에 span 집어넣기
function paintToDo(newTodo) {
    //li, span, button만들기.
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    // 삭제버튼 button, 이모지 단축키는 윈도우 + . 
    const button = document.createElement("button");
    button.innerText = "❌";
    //버튼 눌릴시 삭제
    button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

//parse를 이용해 단순한 string을 살아있는 js object로 바꾸기
//기본 기능막기 handleToDoSubmit, newTodo, 입력값받기
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";//칸 내용비우기
    const newTodoObj = {   //밑에 newTodo대신 새 object넣고싶음
        text: newTodo,
        id: Date.now(),
      };
      toDos.push(newTodoObj); //사용자가 적어돈 text를 push함
      paintToDo(newTodoObj);
      saveToDos();
    }

    toDoForm.addEventListener("submit", handleToDoSubmit);

    const savedToDos = localStorage.getItem(TODOS_KEY);

//localStorage에서 받아온 값을 object(배열)로 바꿔줌
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //기존에 있던 배열에 추가하는것 6번째줄꺼를 let으로 바꾼이유
    parsedToDos.forEach(paintToDo); //배열 안에 있는 것(item)을 알려줌, 각각을 실행
}