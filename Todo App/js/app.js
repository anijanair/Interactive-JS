//Problem: user interaction doesn't give any results
//Solution: Add interactivity using javascript
var taskInput =document.getElementById("new-task"); //new task
var addButton =document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder =document.getElementById("incomplete-tasks");
var completedTasksHolder =document.getElementById("completed-tasks");

//add new task
var addTask = function(){
console.log("add texts..");
}

//edit existing task
var editTask = function(){
console.log( "edit aaa");
}

//delete an existing task
var deleteTask = function(){
  console.log("delete ... text..");

}

//mark a task as completed
var taskCompleted = function(){console.log("finish text..");

}

//mark a task as incomplete
var taskIncomplete = function(){
  console.log("incomplete text..");

}
var bindTaskEvents= function(taskListItem, checkBoxEventHandler){
   var checkBox=taskListItem.querySelector("input[type=checkbox]");
   var editButton=taskListItem.querySelector("button.edit");
   var deleteButton=taskListItem.querySelector("button.delete");

   checkBox.onchange =checkBoxEventHandler;
   editButton.onclick =editTask;
   deleteButton.onclick =deleteTask;
}



addButton.onclick = addTask;

for (var i=0; i<incompleteTasksHolder.children.length; i++){
bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (var i=0; i<completedTasksHolder.children.length; i++){
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
