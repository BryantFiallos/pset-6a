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
