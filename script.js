const input = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const clearbtn = document.querySelector(".footer button");
const pendingnumb = document.querySelector(".pendingnumber");



let id = 0;

let arr = [];

if (localStorage.getItem("toDo") == null) {
} else {
    arr = JSON.parse(localStorage.getItem("toDo"));
    id = arr[arr.length - 1];
    showTasks();
}



addBtn.onclick = () => addTask()
input.addEventListener("keydown", ((e) => {
    let key = e.keyCode;
    if (key == 13) {
        addTask()
    }
}));



function addTask() {
    id = id + 1;
    let obj = new Object({
        id: id,
        data: input.value,

    });
    if (input.value !== "") {
        arr.push(obj)
        localStorage.setItem("toDo", JSON.stringify(arr));
        showTasks()
    }
}



function showTasks() {
    let task = document.querySelector(".todoList");
    task.innerHTML = ""

    arr.forEach(element => {
        let newtodo
        newtodo = document.createElement("li");
        task.appendChild(newtodo);
        newtodo.innerHTML = element.data + '<div ><img class="product" src="./gricon.png"  /> <img class="product" src="./eicon.png"  /> </div>'
        input.value = ""
        newtodo.onclick = () => deleteTask(element.id)
        pendingnumb.textContent = arr.length;
    })
}





clearbtn.onclick = () => {

    localStorage.removeItem("toDo");
    let task = document.querySelector(".todoList");
    task.innerHTML = ""
    arr = []
    pendingnumb.textContent = 0;
}


function deleteTask(index) {
    arr = arr.filter(function (element) {
        return index !== element.id
    });
    localStorage.setItem("toDo", JSON.stringify(arr));
    showTasks()

}

