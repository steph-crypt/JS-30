<script>
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullScreen = player.querySelector('.screen_toggle');


function togglePlay() {
  const playMethod = video.paused ? 'play' : 'pause';
  video[playMethod]();
}

function updateButton() {
  const icon = this.paused ? '>' : "||";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = [this.value]
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}









video.addEventlistener('click', togglePlay);
video.addEventlistener('play', updateButton);
video.addEventlistener('pause', updateButton);
video.addEventlistener('timeUpdate', handleProgress);
skipButtons.forEach(skipButton => skipButton.addEventlistener('click', skip));
ranges.forEach(range => range.addEventlistener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventlistener('mousemove', handleRangeUpdate));



</script>
