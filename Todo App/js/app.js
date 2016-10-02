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
  //Modifying the elements
  checkBox.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "Delete";
  label.innerText = taskString;


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
  var listItem = createNewTaskElement(taskInput.value);
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = "";
}

//edit existing task
var editTask = function(){
  console.log( "edit text");
  var listItem = this.parentNode;
  var editInput = listItem.querySelector ("input[type=text]");
  var label = listItem.querySelector("label");
   //if the class of the parent id .editMode
   var containClass = listItem.classList.contains("editMode");
   if (containClass) {
     //switch from editMode
     //label text becomes input's value
     label.innerText = editInput.value;
   } else {
     //switch to editMode
     editInput.value = label.innerText;
   }
   //toggle editMode on the list item
   listItem.classList.toggle(editMode);
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
  var listItem = this.parentNode;// 'this' here is the checkBox
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);

}

var taskIncomplete = function(){
  console.log("incomplete text..");
  var listItem = this.parentNode;// 'this' here is the checkBox
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

}
var bindTaskEvents= function(taskListItem, checkBoxEventHandler){
   console.log("bind list item events");
   var checkBox = taskListItem.querySelector("input[type=checkbox]");
   var editButton = taskListItem.querySelector("button.edit");
   var deleteButton = taskListItem.querySelector("button.delete");

   editButton.onclick = editTask;
   deleteButton.onclick = deleteTask;
   checkBox.onclick = checkBoxEventHandler;
}

addButton.onclick = addTask;

for (var i=0; i<incompleteTasksHolder.children.length; i++){
bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (var i=0; i<completedTasksHolder.children.length; i++){
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
