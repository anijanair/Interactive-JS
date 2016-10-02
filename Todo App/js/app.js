//Problem: user interaction doesn't give any results
//Solution: Add interactivity using javascript
var taskInput = document.getElementById("new-task"); //new task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

var createNewTaskElement = function(taskString){
  var listItem=document.createElement("li");
  var checkBox = document.createElement("checkbox");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}
//add new task
var addTask = function(){
console.log("add texts..");
  var listItem = createNewTaskElement("some new task");
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

//edit existing task
var editTask = function(){
console.log( "edit text");
}

//delete an existing task
var deleteTask = function(){
  console.log("delete ... text..");
  var listItem = this.parentNode;//'this' here is the deleteButton
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

//mark a task as completed
var taskCompleted = function(){
  console.log("finished task..");
  var listItem = this.parentNode// 'this' here is the checkBox
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);

}

//mark a task as incomplete
var taskIncomplete = function(){
  console.log("incomplete text..");
  var listItem = this.parentNode// 'this' here is the checkBox
  incompleteTasksHolder.appendChild(listItem);


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
