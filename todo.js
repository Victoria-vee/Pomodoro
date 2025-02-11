const input =  document.getElementById("task-input")
const list = document.getElementById("todo-list")

function addtask(){
    if (input.value === ''){
        alert("No Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
    
    }
    
    input.value = "";
}