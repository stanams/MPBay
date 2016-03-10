var samples_list = [
  "kick-808",
  "clap",
  "snare-vinyl01",
  "kick-vinyl01",
  "hihat-plain",
  "snare-block",
  "snare-noise",
  "shaker-shuffle",
  "tom-analog"
]

var metronomeSounds = [
  "metronome1",
  "metronome2"
]

var music_background = "hh-track";

function loadSound () {
  createjs.Sound.registerSound("samples_list/kick-808.wav", 0);
  createjs.Sound.registerSound("samples_list/snare-vinyl01.wav", 1);
  createjs.Sound.registerSound("samples_list/clap.wav", 2);
  createjs.Sound.registerSound("samples_list/kick-vinyl01.wav", 3);
  createjs.Sound.registerSound("samples_list/hihat-plain.wav", 4);
  createjs.Sound.registerSound("samples_list/snare-block.wav", 5);
  createjs.Sound.registerSound("samples_list/snare-noise.wav", 6);
  createjs.Sound.registerSound("samples_list/shaker-shuffle.wav", 7);
  createjs.Sound.registerSound("samples_list/tom-analog.wav", 8);
  createjs.Sound.registerSound("samples_list/metronome/metronome1.wav", 9);
  createjs.Sound.registerSound("samples_list/metronome/metronome2.wav", 10);
  createjs.Sound.registerSound("http://res.cloudinary.com/codehunt/video/upload/v1457576486/Hip_Hop_Drumless_Backing_Track_vkxnzk.mp3", music_background);
}

function playSound (idx) {
  createjs.Sound.play(idx);
}

function playTrack() {
  createjs.Sound.play(music_background);
}

function stopTrack() {
  createjs.Sound.stop();
}

var isPlaying = false;
var isRecording = false;
var startTime = null;
var timeOut;
var tickCount;
var ctsPerBeat = 200;
var toAdd = [];
var master = {1: {}, 2: {}, 3: {}, 4: {} };
var metronomeOn = true;
var track = 1;

for (var i = 0; i < ctsPerBeat; i++) {
  master[1][i] = [];
  master[2][i] = [];
  master[3][i] = [];
  master[4][i] = [];
}

function metronome(time){
  if (metronomeOn){
    if (time === 0) {
      playSound(9);
    } else if ([51, 101, 151].indexOf(time) > -1) {
      playSound(10);
    }
  }
}

function advanceClock() {
  var time = tickCount % ctsPerBeat;
  // console.log(time);
  metronome(time);

  // if (time === 0) {
  //   playSound(1);
  // }
  if (isRecording) {
    master[track][time] = toAdd;
    toAdd = [];
  }
  [1, 2, 3, 4].forEach(function(j){
    master[j][time].forEach (function(i){
      playSound(i);
    })
  })
  tickCount += 1;
}
var handleRecord = function() {
    isRecording = true;
    startPlaying();
}

var startPlaying = function(){
  if (!isPlaying) {
    isPlaying = true;
    startTime = new Date();
    tickCount = 0;
    advanceClock();
    timeOut = setInterval(advanceClock, 10);
  }
}

function toggleMetronome(){
  metronomeOn = !metronomeOn;
}

function stopRecording(){
  isRecording = false;
}

var handleNote = function (idx){
  playSound(idx);
}

function setTrack(i){
  track = i;
  isRecording = false;
}
