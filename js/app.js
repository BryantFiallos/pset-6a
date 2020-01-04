var toDoListArray = [];

var input = document.getElementById("user-input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("input-task").click();
 };
});


function refreshToDoList() {

  newInnerHtml = "";

  for (var j = 0; j < toDoListArray.length; j++){
    newInnerHtml += '<tr><td><img onclick="setItemCompleted(' + toDoListArray[j].todo_index_num + ')" src="images\\black\\24x24\\Ok.gif" title="Completed/Not completed" name="item_' + toDoListArray[j].todo_index_num + '" value="' + toDoListArray[j].todo_status + '" ' + toDoListArray[j].todo_status + '></td><td class="todo_item_' + toDoListArray[j].todo_priority + '">' + (toDoListArray[j].todo_index_num + 1) + ': </td><td class="todo_item_' + toDoListArray[j].todo_status + '">' + toDoListArray[j].todo_description + '</td><td><img onclick="moveItemToTop(' + toDoListArray[j].todo_index_num + ')" title="Set priorty high" src="images\\black\\24x24\\Arrow1 Up.gif"></td><td><img onclick="moveItemToBottom(' + toDoListArray[j].todo_index_num + ')" title="Set priorty low" src="images\\black\\24x24\\Arrow1 Down.gif"></td><td><img onclick="deleteItem(' + toDoListArray[j].todo_index_num + ')" title="Delete" src="images\\red\\24x24\\Trash.gif"></td></tr>';
  }

document.getElementById('to-do-list-display').innerHTML = newInnerHtml;

  if (toDoListArray.length > 0) {
    document.getElementById('to-do-list-display').style.borderWidth = "1px";
    document.getElementById('to-do-list-display').style.borderColor = "black";
  }
}



function addTask() {



  var task = document.getElementById("user-input").value;

  if (task == null || task == undefined || task.length == 0) {
                alert("New task cannot be empty\n");
            } else {
                var new_item_num = toDoListArray.length
				toDoListArray.push({todo_index_num:new_item_num, todo_status:"", todo_description:document.getElementById("user-input").value, todo_priority:"low"});

        document.getElementById("user-input").value = "";
}
  refreshToDoList();
}


function setItemCompleted (item_index_num) {
  if (toDoListArray[item_index_num].todo_status == "") {
  toDoListArray[item_index_num].todo_status = "completed";
}
else if (toDoListArray[item_index_num].todo_status == "completed") {
  toDoListArray[item_index_num].todo_status = "";

}
refreshToDoList();
}


function moveItemToTop (item_index_num) {
var topTask = toDoListArray[item_index_num];
topTask.todo_priority = "high";
if (topTask.todo_priority == "high") {
if (item_index_num > -1) {
  toDoListArray.splice(item_index_num, 1);
  toDoListArray.unshift(topTask);
}
}
for (let todoTask of toDoListArray) {
  todoTask.todo_index_num = toDoListArray.indexOf(todoTask);
}

refreshToDoList();
}


function moveItemToBottom (item_index_num) {
  var lowTask = toDoListArray[item_index_num];
  lowTask.todo_priority = "low";
  if (lowTask.todo_priority == "low") {
  if (item_index_num > -1) {
    toDoListArray.splice(item_index_num, 1);
    toDoListArray.push(lowTask);
  }
}
  for (let todoTask of toDoListArray) {
    todoTask.todo_index_num = toDoListArray.indexOf(todoTask);
  }

  refreshToDoList();
}


function deleteItem (item_index_num) {
toDoListArray.splice(item_index_num, 1);
for (let todoTask of toDoListArray) {
  todoTask.todo_index_num = toDoListArray.indexOf(todoTask);
}
refreshToDoList();
}





const makeList = function () {

  toDoList.forEach(function(item) {
  var table = document.getElementById("to-do-table");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = document.getElementById("user-input").value;
});
}
