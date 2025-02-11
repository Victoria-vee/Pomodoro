const input =  document.getElementById("task-input")
const list = document.getElementById("todo-list")

function addtask(){
    if (input.value === ''){
        alert("No Task");
    }
    else{
        let task = document.createElement("li");
        task.innerHTML = input.value;
        list.appendChild(task);
        let trash = document.createElement("i");
        trash.className = "fa-solid fa-trash"
        task.appendChild(trash);
    
    }
    
    input.value = "";
    saveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "I"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("taskData", list.innerHTML);
}

function displayData(){
    list.innerHTML = localStorage.getItem("taskData");
}

displayData();