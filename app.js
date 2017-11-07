$(document).ready(function(){

  $(document).tooltip({
      position: {
        my: "center bottom",
        at: "center top-105",
        using: function( position, feedback ) {
          $(this).css(position);
          $(this).css("width", "250px");
          $("<div>")
            .addClass("arrow")
            .addClass(feedback.vertical)
            .addClass(feedback.horizontal)
            .appendTo(this);
        }
      }
    });

});
