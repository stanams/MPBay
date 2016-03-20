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
    $("#next-step-0").on("click", function(){
     $("#step-1").css("z-index", 2);
     $('#pad1').addClass("step-1-pad-background");
    });

    $("#next-step-1").on("click", function(){
      $("#step-2").css("z-index", 3);
      $('#pad1').removeClass("step-1-pad-background");
      $('#pad2').addClass("step-2-pad-background");
    });

    $("#next-step-2").on("click", function(){
      $("#step-3").css("z-index", 4);
      $('#pad3').addClass("step-3-pad-background");
      $('#pad4').addClass("step-3-pad-background");
      $('#pad2').removeClass("step-2-pad-background");
    });

    $("#next-step-3").on("click", function(){
      $("#step-4").css("z-index", 5);
      $('#pad5').addClass("step-4-pad-background");
      $('#pad6').addClass("step-4-pad-background");
      $('#pad3').removeClass("step-3-pad-background");
      $('#pad4').removeClass("step-3-pad-background");
    });

    $("#next-step-4").on("click", function(){
      $("#step-5").css("z-index", 6);
      $('#pad5').removeClass("step-4-pad-background");
      $('#pad6').removeClass("step-4-pad-background");
      $('#pad7').addClass("step-5-pad-background");
      $('#pad8').addClass("step-5-pad-background");
      $('#pad9').addClass("step-5-pad-background");
    });


    // Keys helper icon
    $("#help-icon").on("click", function(){
      for (var i = 0; i < 10; i++) {
        $('.pad' + i.toString() + '-class-key').toggle();
      }
    });

});
