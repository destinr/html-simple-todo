console.log("Hello World")

let numTasks = 0;

const addTask = () => {
    numTasks++;
    let newTask = document.getElementById("newTask").value;
    const tasksDiv = document.getElementById("TODO items");
    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'todo');
    taskDiv.setAttribute('id','task'+numTasks)
    taskDiv.innerHTML = numTasks.toString() + ": " + newTask;
    tasksDiv.append(taskDiv);
    taskDiv.setAttribute('onclick', `crossOff(${taskDiv.id})`)


    document.getElementById("newTask").value = "";
}

const crossOff = (element) => {
    eleText = element.innerHTML
    element.innerHTML = `<s> ${eleText} </s>`
}

const inputBox = document.getElementById("newTask")
inputBox.addEventListener("keypress",function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("submitTask").click();
    }
    
});