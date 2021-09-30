const input = document.getElementById("inputfield");
const addBtn = document.getElementById("addtodo");
const toDoContainer = document.getElementById("todo-container");
const toDoList = document.querySelector(".todo-list");
const myForm = document.getElementById('myTodo');
document.querySelector('form').addEventListener("submit", addToDo);
toDoList.addEventListener("click", deletedo);

const addToDoList = async() => {
  const data = await getData();
  console.log(data)
  const getTodo = data.map(item => {
      addToDo(item);
  });
  
}
addToDoList();



function addToDo(item) {

    const form = document.createElement('form');
    form.setAttribute('id', item._id); // creates ID
    console.log(form)

    // todo Div
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.classList.add("toDo_item");
    newTodo.innerText = input.value;

    //delete and trashbutton
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = `<i class="fas fa-check"></li>`;
    completeBtn.classList.add("complete-btn");

    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");

    //merging elements
    toDoDiv.appendChild(newTodo);
    toDoDiv.appendChild(completeBtn);
    toDoDiv.appendChild(trashBtn);
    toDoList.appendChild(toDoDiv);
   }
   


   function deletedo(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
       item.parentElement.remove();
      
      
    }
    if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
  }
const postNewTodo = async() => {
 myForm.addEventListener('submit', async(event) => {
      event.preventDefault();
      let item = {
          description: input.value,
          done: false,
      }
      const post = await postTodo(item);
      const data = await getData();
      const id = data.find(({ description }) => description === input.value);
      
      getData(item);
  });
}
postNewTodo();



