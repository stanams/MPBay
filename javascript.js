$(document).ready(function() {

    // Assign a sample to each pad
    $(document).bind("keydown", function(event){
      var helper = {
        81: 0,
        87: 1,
        69: 2,
        65: 3,
        83: 4,
        68: 5,
        90: 6,
        88: 7,
        67: 8,
      }

      var index = helper[event.keyCode];
        if (index || (index === 0)) {
          createjs.Sound.play(index);
          if (isRecording) {
            toAdd.push(index);
          }
          $("#pad" + (index + 1).toString()).addClass("note-key-pressed");
          $("#pad" + (index + 1).toString() + " .lightening-dot").addClass("lightening-dot-pressed");
        }

    });


    // Adapat style to pressed pads
    $(document).bind("keyup", function(event){

      var helper = {
        81: 0,
        87: 1,
        69: 2,
        65: 3,
        83: 4,
        68: 5,
        90: 6,
        88: 7,
        67: 8,
      }

      var index = helper[event.keyCode];
      if (index || (index === 0)) {

        $("#pad" + (index + 1).toString()).removeClass("note-key-pressed");
        $("#pad" + (index + 1).toString() + " .lightening-dot").removeClass("lightening-dot-pressed");
      }

    });

    $(".app-title").click(function(){
      location.reload();
    });

    // The following code stands for the different steps
    // of the tutorial when clicking on the NEXT button

    var count = 0;


    $("#next-step-zero").on("click", function(){
      $("#step-one").css("z-index", 2);
    });

    $("#next-step-one").on("click", function(){
      $("#step-two").css("z-index", 3);
    });

    $("#next-step-two").on("click", function(){
      $("#step-three").css("z-index", 4);
    });

    $("#next-step-three").on("click", function(){
      $("#step-four").css("z-index", 5);
    });

    $("#next-step-four").on("click", function(){
      $("#step-five").css("z-index", 6);
    });


});
