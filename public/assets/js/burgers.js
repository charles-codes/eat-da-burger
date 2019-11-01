// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eatButton").on("click", function(event) {
    var id = $(this).data("id");
    // var isEat = $(this).data("devoured");

    var newEat = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEat
    }).then(
      function() {
        console.log("changed devoured to" + newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // Button to remake a burger, the opposite of eat a burger
  $(".makeButton").on("click", function(event) {
    var id = $(this).data("id");
    // var isEat = $(this).data("devoured");

    var newEat = {
      devoured: false
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEat
    }).then(
      function() {
        console.log("changed devoured  to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  
  
  
  
  
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burg").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});