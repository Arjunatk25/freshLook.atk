// add tasks

let tasksList =[]; 
let taskInput = document.querySelector(".taskinp");
let taskDiv = document.querySelector(".tasks");
let taskAdd = document.querySelector(".taskbutton");
taskAdd.onclick = taskmaker;
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      taskmaker();
    }
  });
function taskmaker(){
    if (taskInput.value != ""){
    const node = document.createElement("li");
    node.innerHTML=taskInput.value;
    node.classList.add("in");
    tasksList.push(taskInput.value);
    taskDiv.appendChild(node);
    taskInput.value="";
    
    saveTasks();
    }
}

//delete tasks

taskDiv.addEventListener("click", (event)=>{
    event.target.classList.toggle("checked");
    event.target.classList.toggle("in");
    event.target.classList.toggle("deletion");
    setTimeout(()=>{
        event.target.remove();
        saveTasks();
    }, 800);
    
    
})





//time 

let time= document.querySelector(".nowtime");
function timeUpdater (){
const now = new Date();
let hour = now.getHours();
let min = now.getMinutes();

if (hour >12)
{
    hour-=12;
}
if (hour<10)
{
    hour = "0"+hour;
}

if (min<10)
{
    min = "0"+min;
}
time.innerHTML=hour +":" +min;
}
setInterval(timeUpdater, 1000);


//save data

function saveTasks(){
    localStorage.setItem("tasks",taskDiv.innerHTML);
}

function retrieveTasks(){
    taskDiv.innerHTML = localStorage.getItem("tasks");
}

retrieveTasks();

//login
// var ObjPeople=[
//     {
//         USER : "arjun25.balaji@gmail.com",
//         Password : "Arjun123"
//     },
//     {
//         USER : "august2004@gmail.com",
//         Password : "August123"
//     }

// ]
// function getInfo(){
//     var USER = document.getElementById("USER").value
//     var Password = document.getElementById("Password").value
//     for (var i=0; i<ObjPeople.length;i++)
//     {
//         if(USER == ObjPeople[i].USER&& Password==ObjPeople[i].Password )
//         {
//             console.log(USER+"is logged in!!!")
//             location.replace('index.html')
//             return
//         }
//     }

// }