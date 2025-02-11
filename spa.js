document.addEventListener("DOMContentLoaded", ()=>{

    //remove
    const settingsButton = document.querySelector(".settings-button")
    const homeButton = document.querySelector(".home-button")
    function hideAndShow(e){
        console.log("clicked on hide and show")
        const settingsSection = document.querySelector(".settings")
        const homeSection = document.querySelector(".home")
    
        if(e.target.textContent == "home"){
            settingsSection.style.display = "none"
            homeSection.style.display = "block"
        }
        else if(e.target.textContent == "settings"){
            settingsSection.style.display = "block"
            homeSection.style.display = "none"
        }
    }
    
    homeButton.addEventListener("click", hideAndShow)
    settingsButton.addEventListener("click", hideAndShow)


    tasks = []
    const AddTaskButton = document.querySelector(".add")
    const todoList = document.querySelector("#todo-list")
    function addTaskHandler(){
        let obj = {
            completed: false,
            task: document.querySelector("#task-input").value
        }
        tasks.push(obj)
        displayTasks()
    }


    function displayTasks(){
        todoList.innerHTML = ""
        tasks.forEach(element => {
            const LI = document.createElement("li")
            const label = document.createElement("label")
            label.textContent = element.task
            label.for = element.task
            const checkBox = document.createElement("input")
            checkBox.name = element.task
            checkBox.id - element.task
            checkBox.type = "checkbox"
            if(element.completed){
                checkBox.checked = true
            }
            LI.appendChild(label)
            LI.appendChild(checkBox)
            todoList.appendChild(LI)
            checkBox.addEventListener("click", toggleComplete)
        });
    }

    function toggleComplete(e){
        console.log(e)
    }

    AddTaskButton.addEventListener("click", addTaskHandler)

})