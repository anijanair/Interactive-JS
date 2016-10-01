//Problem: user interaction doesn't give any results
//Solution: Add interactivity using javascript
var taskInput =document.getElementById("new-task"); //new task
var addButton =document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder =document.getElementById("incomplete-tasks");
var completedTasksHolder =document.getElementById("completed-tasks");

//add new task
var addTask = function(){
console.log("add text..");
}

//edit existing task
var editTask = function(){

}

//delete an existing task
var deleteTask = function(){

}

//mark a task as completed
var taskCompleted = function(){

}

//mark a task as incomplete
var taskIncomplete = function(){

}
var bindTaskEvents= function(taskListItem, checkBoxEventHandler){

}


addButton.onclick = addTask;

for (var i=0; i<incompleteTasksHolder.children.length; i++){
bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (var i=0; i<completedTasksHolder.children.length; i++){
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete); 
}
