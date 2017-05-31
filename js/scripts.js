$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $(this).find("#person1").val();
    $("#letter #person1").append(name);

    $("#letter").show();
    event.preventDefault();
  });
});
