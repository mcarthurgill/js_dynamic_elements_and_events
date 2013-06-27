$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements

    $('button.add').on("click", function() {
      var input = $('input').val();
      addTodo(input);
      // alert('called');
      // buildTodo();
    });

  }

  //Create functions to add, remove and complete todos


  function addTodo(input) {

    var todo_html = '<p>' + input + '</p>';
    $('.todo_list').append(todo_html);
  }
  
  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    var blah = $('#todo_template');
    blah.show();
    return $todo;
  }

  function removeTodo() {
    alert('removeToDo called');
  }
  

  bindEvents();
});
