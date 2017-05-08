function Task(task, when, description1) {
  this.task = task;
  this.when = when;
  this.description1 = description1;
};

Task.prototype.makeTask = function () {
  return this.task;
};



$(document).ready(function(){
  $("form#new-task").submit(function(event){
    event.preventDefault();

  // get inputs from user:
  var inputtedtask = $("#new-task-name").val();
  var inputtedwhen = $("#new-when").val();
  var inputteddescription1 = $("#new-description1").val();


  // var taskList = $("#task-list").val()
  // var showTask = $("#show-task").val();

  // Make a new Object... Using the constructor "Task"?
  var newTask = new Task (inputtedtask, inputtedwhen, inputteddescription1);


  // Display Output, displaying var newTask Object, aplying the Method "makeTask"?:
$("ul#task-list").append("<li><span class='task'>" + newTask.makeTask() + "</span></li>");


  });
});
