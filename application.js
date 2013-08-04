$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    $('button.add').on("click", function() {
      var input = $('input').val();
      addTodo(input);
    });

  }

  function addTodo(input) {
    var todo_html = '<p>' + input + '</p>';
    $('.todo_list').append(todo_html);
  }
  
  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName);
    var template = $('#todo_template');
    template.show();
    return $todo;
  }

  function removeTodo() {
    alert('removeToDo called');
  }
  

  bindEvents();
});
