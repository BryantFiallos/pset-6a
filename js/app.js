var toDoListArray = [];




function refreshToDoList() {

  newInnerHtml = "";

  for (var j = 0; j < toDoListArray.length; j++){
    newInnerHtml += '<tr><td><input onclick="setItemCompleted(' + toDoListArray[j].todo_index_num + ')" type="checkbox" name="item_' + toDoListArray[j].todo_index_num + '" value="' + toDoListArray[j].todo_status + '" ' + toDoListArray[j].todo_status + '></td><td>' + toDoListArray[j].todo_index_num + ' :</td><td class="todo_item_' + toDoListArray[j].todo_status + '">' + toDoListArray[j].todo_description + '</td><td><img onclick="moveItemToTop(' + toDoListArray[j].todo_index_num + ')" src="images\\red\\24x24\\Arrow1 Up.gif"></td><td><img onclick="moveItemToBottom(' + toDoListArray[j].todo_index_num + ')" src="images\\red\\24x24\\Arrow1 Down.gif"></td><td><img onclick="deleteItem(' + toDoListArray[j].todo_index_num + ')" src="images\\red\\24x24\\trash.gif"></td></tr>';
  }

document.getElementById('to-do-list-display').innerHTML = newInnerHtml;

}




function addTask(addListItem) {

  var task = document.getElementById("user-input").value;

  if (task == null || task == undefined || task.length == 0) {
                alert("New item cannot be empty\n");
            } else {
                var new_item_num = toDoListArray.length
				toDoListArray.push({todo_index_num:new_item_num, todo_status:"", todo_description:task.value});

        document.getElementById("user-input").value = "";
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
