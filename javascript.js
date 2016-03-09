$(document).ready(function() {

    $(document).bind("keydown", function(event){
      switch (event.keyCode) {
        // Q
        case 81:
          createjs.Sound.play(samples_list[0]);
          $("#pad1").addClass("note-key-pressed");
          $("#pad1 .lightening-dot").addClass("lightening-dot-pressed");
          break;
        case 87:
          createjs.Sound.play(samples_list[1]);
          $("#pad2").addClass("note-key-pressed");
          $("#pad2 .lightening-dot").addClass("lightening-dot-pressed");
          break;
        case 69:
          createjs.Sound.play(samples_list[2]);
          $("#pad3").addClass("note-key-pressed");
          $("#pad3 .lightening-dot").addClass("lightening-dot-pressed");
          break;
        case 65:
          createjs.Sound.play(samples_list[3]);
          $("#pad4").addClass("note-key-pressed");
          $("#pad4 .lightening-dot").addClass("lightening-dot-pressed");
          break;
        case 83:
          createjs.Sound.play(samples_list[4]);
          $("#pad5").addClass("note-key-pressed");
          $("#pad5 .lightening-dot").addClass("lightening-dot-pressed");
          break;
        case 68:
          createjs.Sound.play(samples_list[5]);
          $("#pad6").addClass("note-key-pressed");
          $("#pad6 .lightening-dot").addClass("lightening-dot-pressed");
          break;
        case 90:
          createjs.Sound.play(samples_list[6]);
          $("#pad7").addClass("note-key-pressed");
          $("#pad7 .lightening-dot").addClass("lightening-dot-pressed");
          break;
        case 88:
          createjs.Sound.play(samples_list[7]);
          $("#pad8").addClass("note-key-pressed");
          $("#pad8 .lightening-dot").addClass("lightening-dot-pressed");
          break;
        case 67:
          createjs.Sound.play(samples_list[8]);
          $("#pad9").addClass("note-key-pressed");
          $("#pad9 .lightening-dot").addClass("lightening-dot-pressed");
          break;
      }
    });

    $(document).bind("keyup", function(event){
      switch (event.keyCode) {
        // Q
        case 81:
          $("#pad1").removeClass("note-key-pressed");
          $("#pad1 .lightening-dot").removeClass("lightening-dot-pressed");
          // $(".container-single-pad").removeClass(".container-single-pad-pressed");
          break;
        case 87:
          $("#pad2").removeClass("note-key-pressed");
          $("#pad2 .lightening-dot").removeClass("lightening-dot-pressed");
          break;
        case 69:
          $("#pad3").removeClass("note-key-pressed");
          $("#pad3 .lightening-dot").removeClass("lightening-dot-pressed");
          break;
        case 65:
          $("#pad4").removeClass("note-key-pressed");
          $("#pad4 .lightening-dot").removeClass("lightening-dot-pressed");
          break;
        case 83:
          $("#pad5").removeClass("note-key-pressed");
          $("#pad5 .lightening-dot").removeClass("lightening-dot-pressed");
          break;
        case 68:
          $("#pad6").removeClass("note-key-pressed");
          $("#pad6 .lightening-dot").removeClass("lightening-dot-pressed");
          break;
        case 90:
          $("#pad7").removeClass("note-key-pressed");
          $("#pad7 .lightening-dot").removeClass("lightening-dot-pressed");
          break;
        case 88:
          $("#pad8").removeClass("note-key-pressed");
          $("#pad8 .lightening-dot").removeClass("lightening-dot-pressed");
          break;
        case 67:
          $("#pad9").removeClass("note-key-pressed");
          $("#pad9 .lightening-dot").removeClass("lightening-dot-pressed");
          break;
      }
    });


    $(".onoffswitch").click(function(){
      $("#pad1").toggleClass("pad1-class:after", add);
      $("#pad2").toggleClass("pad2-class:after", add);
      $("#pad3").toggleClass("pad3-class:after", add);
      $("#pad4").toggleClass("pad4-class:after", add);
      $("#pad5").toggleClass("pad5-class:after", add);
      $("#pad6").toggleClass("pad6-class:after", add);
      $("#pad7").toggleClass("pad7-class:after", add);
      $("#pad8").toggleClass("pad8-class:after", add);
      $("#pad9").toggleClass("pad9-class:after", add);
    };
});


/////////////////////// Audio player ////////////////////////

// var music = document.getElementById('music'); // id for audio element
//
// var pButton = document.getElementById('pButton'); // play button
//
//
// //Play and Pause
// function play() {
// 	// start music
// 	if (music.paused) {
// 		music.play();
// 		// remove play, add pause
// 		pButton.className = "";
// 		pButton.className = "pause";
// 	} else { // pause music
// 		music.pause();
// 		// remove pause, add play
// 		pButton.className = "";
// 		pButton.className = "play";
// 	}
// }
