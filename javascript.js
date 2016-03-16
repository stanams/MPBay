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

    $("#next-btn").on("click", function(){
      $("#explanations-parag-one").replaceWith("<p class='explanations-text'>First, let's discover our instrument. Each <b style='color:#EE2C2C;'>pad</b> corresponds to a specific drum sound.</p>");
      $("#explanations-parag-two").replaceWith("<p class='explanations-text'>The red pad is what we call a <b style='color:#EE2C2C;'>'kick'</b>. It's that <b style='color:#EE2C2C;'>heavy drum</b> sound that gives the <b style='color:#EE2C2C;'>tempo</b> in a lot of songs!</p>");
      $("#instructions-content").replaceWith("<p class='explanations-text instructions-el'>Press <b style='color:#EE2C2C;'>space</b> to get the metronome running, then <b style='color:#EE2C2C;'>play the kick</b> pad following the rhythm!</p>");
      // I will add clas and remove class to the button instead
      // of changing IDs which is not good practice.
      // So let's use unique classes pour the NEXT button.
    });

    $("#next-btn-2").on("click", function(){
      $("#explanations-parag-one").replaceWith("<p class='explanations-text'>fok</p>");
    });
});
