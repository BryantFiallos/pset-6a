var toDOList = [];

window.onload = function() {
  document.getElementById('input-task').onclick = addTask;
}


const addTask = function () {

  toDOList.push(document.getElementById("myText").value);
  document.getElementById("myText").value = "";

var table = document.getElementById('to-do-table');


}
