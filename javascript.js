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

    // Index background color to selected track

    $('#track1').click(function(){
      $(".note-key").addClass("yo-class");
    });

});

// $(".onoffswitch").click(function(){
//   $("#pad1").toggleClass("pad1-class:after", add);
//   $("#pad2").toggleClass("pad2-class:after", add);
//   $("#pad3").toggleClass("pad3-class:after", add);
//   $("#pad4").toggleClass("pad4-class:after", add);
//   $("#pad5").toggleClass("pad5-class:after", add);
//   $("#pad6").toggleClass("pad6-class:after", add);
//   $("#pad7").toggleClass("pad7-class:after", add);
//   $("#pad8").toggleClass("pad8-class:after", add);
//   $("#pad9").toggleClass("pad9-class:after", add);
// };
