function Task(task, when, description1) {
  this.task = task;
  this.when = when;
  this.description1 = description1;
  // this.taskId = taskId;
};

Task.prototype.makeTask = function () {
  return this.task;
};

var arrayObjects = [];

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
  $("ul#task-list").append("<li><span class='tarea'>" + newTask.makeTask() + "</span></li>");


  // <button type='button' name='Done'></button>
//<button type='button' name='Done' class='remove1'>Delete</button>

  $(".tarea").last().click(function() {
    $("#show-task").toggle();
    $("#show-task h2").text(newTask);
    $(".when").text(newTask.when);
    $(".description1").text(newTask.description1);

  });

  $(".remove1").click(function(){

  });
  // $(".remove").onclick(function(){
  arrayObjects.push(newTask.task);
  console.log(arrayObjects);

    $("#new-task-name").val("");
    $("#new-when").val("");
    $("#new-description1").val("");
  });
});
