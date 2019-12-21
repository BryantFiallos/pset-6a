var toDoList = [];

window.onload = function() {
  document.getElementById('input-task').onclick = addTask;
  document.getElementById("display").innerHTML = makeList;
}


const addTask = function () {

  var task = document.getElementById("user-input").value;

  if (task != "") {
    toDoList.push(task);
    document.getElementById("user-input").value = "";
  }
}



const makeList = function () {

  toDoList.forEach(function(item) {
  var table = document.getElementById("to-do-table");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = document.getElementById("user-input").value;
});
}
