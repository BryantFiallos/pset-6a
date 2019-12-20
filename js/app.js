var toDoList = [];


window.onload = function() {
  document.getElementById('input-task').onclick = addTask;
  document.getElementById('display') = displayList;
}


const addTask = function () {

  toDoList.push(document.getElementById("user-input").value);
  document.getElementById("user-input").value = "";

displayList.innerHTML = makeList;
}

const makeList = function () {

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
