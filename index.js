const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'violet',
  progressColor: 'purple',
  mediaControls: true
});

const wavesurfer2 = WaveSurfer.create({
  container: '#waveform2',
  waveColor: 'cyan',
  progressColor: 'blue',
  mediaControls: true
});

document.getElementById('playBtn').addEventListener('click', play);
document.getElementById('pauseBtn').addEventListener('click', pause);

document.getElementById('playBtn2').addEventListener('click', play2);
document.getElementById('pauseBtn2').addEventListener('click', pause2);

document.getElementById('playAll').addEventListener('click', play);
document.getElementById('playAll').addEventListener('click', play2);
document.getElementById('pauseAll').addEventListener('click', pauseAll);

function play() {
  wavesurfer.play();
}

function pause() {
  wavesurfer.pause();
}

function play2() {
  wavesurfer2.play();
}

function pause2() {
  wavesurfer2.pause();
}

function playAll() {
  wavesurfer.play();
  wavesurfer2.play();
}

function pauseAll() {
  wavesurfer.pause();
  wavesurfer2.pause();
}

wavesurfer.setVolume(0.25);
wavesurfer2.setVolume(0.25);

let slider = document.getElementById('myRange');
let output = document.getElementById('demo');
output.innerHTML = slider.value / 10; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value / 100;
  wavesurfer.setVolume(this.value / 100);
  wavesurfer2.setVolume(this.value / 100);
};

// wavesurfer.on('ready', () => {
//   wavesurfer.play();
// });

// wavesurfer2.on('ready', () => {
//   wavesurfer2.play();
// });

wavesurfer.load('music/G_Major_Practice_BT.mp3');
wavesurfer2.load('music/GM_pentatonic-shapes-click.mp3');
