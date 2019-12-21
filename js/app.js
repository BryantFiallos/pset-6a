var toDoList = [];

window.onload = function() {
  document.getElementById('input-task').onclick = addTask;
  document.getElementById("display").innerHTML = makeList;
}


const addTask = function () {

  toDoList.push(document.getElementById("user-input").value);
  document.getElementById("user-input").value = "";
}


const makeList = function () {

var table = "<table>";
return(toDoList)
toDoList.forEach(function(item) {
  table += "<tr>";
  table += "<td>" + item.toDoList + "</td>"
  table += "</tr>";
});
table += "</table>"
 return table;
}
