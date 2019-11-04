$(function() {
  $(".eatButton").on("click", function(event) {
    var id = $(this).data("id");

    var newEat = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEat
    }).then(
      function() {
        console.log("changed devoured to" + newEat);
        location.reload();
      }
    );
  });

  $(".makeButton").on("click", function(event) {
    var id = $(this).data("id");

    var newEat = {
      devoured: false
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEat
    }).then(
      function() {
        console.log("changed devoured  to", newEat);
        location.reload();
      }
    );
  });
  
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burg").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});