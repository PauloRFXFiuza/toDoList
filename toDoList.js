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
// 03- Get the typed Value on Input
function addTask(){
    const inputValue= inputTask.value;

    if ((inputValue !== "") && 
        (inputValue !== null) && 
        (inputValue !== undefined)) 
        {
            const itemsNotClicked = 
            `
            <div class="itemsNotClicked">
            <div class="itemsIcons">
                <i class="mdi mdi-circle-outline"></i>
            </div>
            <div class="itemsNames">
                    Task Test Not Clicked
            </div>
            <div class="itemsButtons">
                <button class="delete"><i class="mdi mdi-delete"></i>Delete</button>
            </div>
            `
            ;

            listArea.innerHTML += itemsNotClicked;
    }

}