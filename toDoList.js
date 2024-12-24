// 01- Date and Clock

//Full date and time of today
const date = new Date();
//Day of the Month
const monthDay= date.getDate();
//Current Month - Numeric format - 0=January, 1=February, ..., 11=December
const month = date.getMonth();
//Current Month in literal format in English
const monthNames = ["January", "February", "March","April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];
const literalMonths = monthNames[date.getMonth()];
//Current year with 4 digits
const year = date.getFullYear();
//Day of the Week - Numeric format - 0=Sunday, 1=Monday, ..., 6=Saturday
const diaDaSemana = date.getDay();
//Day of the Week in literal format in English
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"];
const literalDay = dayNames[date.getDay()];

const localTime = new Date().toLocaleTimeString();
const todayDate = new Date().toDateString();
//Print Date and Time in the Page Header
document.getElementById("date").innerHTML="<strong>Today is:</strong> "
+literalDay+". "+literalMonths+", "+monthDay+", "+year+"."
+ "<br><strong>Brasília,Brasil Hour:</strong> "+localTime;

// 02- Create the Input and Button Add Task 
const inputTask= document.getElementById("inputTask"),
buttonAddTask= document.getElementById("buttonAddTask"),
listArea = document.getElementById("listArea");
let count = 0;

function addTask(){
    // 03- Get the typed Value on Input
    const inputValue= inputTask.value;
    //04- Validation to allow only data that is not empty, null and undefined.
    if ((inputValue !== "") && 
        (inputValue !== null) && 
        (inputValue !== undefined)) 
        {
            count++;

            const itemsNotClicked = 
            `
            <div id="${count}" class="itemsNotClicked">
            <div onclick="taskCompleted(${count})" class="itemsIcons">
                <i id="icon_${count}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="taskCompleted(${count})" class="itemsNames">
                    ${inputValue}
            </div>
            <div class="itemsButtons">
                <button onclick="deleteTask(${count})"class="delete"><i class="mdi mdi-delete"></i>Delete</button>
            </div>
            `
            ;
            // 05- Add New Item To Do List 
            listArea.innerHTML += itemsNotClicked;
            // 06- Clean and focus the Input Task
            inputTask.value = "";
            inputTask.focus();


    }else{
        alert("Please enter a valid task.");
    }
   
};

function deleteTask(idCount){
    const task = document.getElementById(idCount);
    task.remove();
};

function taskCompleted(idCount) {
    const task = document.getElementById(idCount);
    const classTask = task.getAttribute('class');
    // returns the value itemsNotClicked
    // refers to <div id="${count}" class="itemsNotClicked">
    if (classTask === "itemsNotClicked") {
        task.classList.remove('itemsNotClicked');
        task.classList.add('itemsClicked');

        const changeIcon= document.getElementById("icon_"+count);

        changeIcon.classList.remove('mdi-circle-outline');
        changeIcon.classList.add('mdi-check-circle');
    }else{
        task.classList.remove('itemsClicked');
        task.classList.add('itemsNotClicked');

        const changeIcon= document.getElementById("icon_"+count);

        changeIcon.classList.remove('mdi-check-circle');
        changeIcon.classList.add('mdi-circle-outline');
    }
};


// Allows the Enter Keyboard button To The Input Task

//NÃO ESTÀ DANDO CERTO, VERIFICAR O PORQUÊ

inputTask.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        buttonAddTask.click();
    }
});