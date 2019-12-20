var toDoList = [];

window.onload = function() {
  document.getElementById('input-task').onclick = addTask;
}


const addTask = function () {

  toDoList.push(document.getElementById("user-input").value);
  document.getElementById("user-input").value = "";

var table = document.getElementById('to-do-table');
console.log(toDoList)
toDoList.forEach(function(item) {
  table += "<tr>";
  table += "<td>" + item.toDoList + "</td>"
  table += "</tr>";
});
table += "</table>"
 return table;
}
