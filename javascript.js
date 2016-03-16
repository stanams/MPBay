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

    $("#app-title").click(function(){
      location.reload();
    });

    // The following code stands for the different steps
    // of the tutorial when clicking on the NEXT button

    $(".step-pivot").on("click", function(){
      $(".explanations-parag-one-0").replaceWith("<p class='explanations-text explanations-parag-one-1'>First, let's discover our instrument. Each <b style='color:#EE2C2C;'>pad</b> corresponds to a specific drum sound.</p>");
      $(".explanations-parag-two-0").replaceWith("<p class='explanations-text explanations-parag-two-1'>The red pad is what we call a <b style='color:#EE2C2C;'>'kick'</b>. It's that <b style='color:#EE2C2C;'>heavy drum</b> sound that gives the <b style='color:#EE2C2C;'>tempo</b> in a lot of songs!</p>");
      $(".instructions-content-0").replaceWith("<p class='explanations-text instructions-el instructions-content-1'>Press <b style='color:#EE2C2C;'>space</b> to get the metronome running, then <b style='color:#EE2C2C;'>play the kick</b> pad following the rhythm!</p>");
      $(".step-pivot").addClass("step-one");
      $(".step-pivot").removeClass("step-zero");
    });

    $(".step-one").on("click", function(){
      debugger
      // this is not even reached
      $("explanations-parag-one-1").replaceWith("bouh");
    });

});
