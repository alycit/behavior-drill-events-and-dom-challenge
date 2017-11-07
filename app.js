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

  $("#click-event").on("click", addEventToList);
  $("#mouseover").mouseover(addEventToList);

});

function addEventToList(event) {
  event.preventDefault();
  // console.log("Mighty Mouseover");

  var eventTemplate = $("#event-template").html();
  var clickCount = parseInt($("#clickCount").text());
  var mouseoverCount = parseInt($("#mouseoverCount").text());
  var newEvent = $(eventTemplate).clone();

  var eventType = event.type;
  var eventDate = new Date(event.timeStamp);
  var hours = eventDate.getHours();
  var minutes = eventDate.getMinutes();
  var seconds = eventDate.getSeconds();

  if(minutes < 10) {
    minutes = "0" + minutes;
  }

  if(seconds < 10) {
    seconds = "0" + seconds;
  }

  $(newEvent).find(".event-name").text(eventType);
  $(newEvent).find(".event-time").text(hours + ":" + minutes + ":" + seconds);

  $(".river-content").prepend(newEvent);

// CLICK IT IF STATEMENT
  if (eventType === "click") {
    counter(clickCount, "#clickCount");
  };

// MOUSEOVER IF STATEMENT
  if (eventType === "mouseover") {
    counter(mouseoverCount, "#mouseoverCount");
    $(".river-content").find(newEvent).first().css("background-color", "#fba3ff");
  };

};

function counter(count, locationTag) {
  var addClick = function() {
    newClickCount = count + 1;
  }

  addClick();

  clickCount = count.toString();
  newClickCount = newClickCount.toString();

  $(locationTag).text( function() {
    return $(this).text().replace(clickCount, newClickCount);
  });
};

