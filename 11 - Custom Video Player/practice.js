<script>
Xconst player = document.querySelector('.player');
Xconst video = player.querySelector('.viewer');
const controls = player.querySelector(.'player__controls');
Xconst progressBar = player.querySelector(.'progress');
Xconst toggle = player.querySelector('.toggle');
Xconst ranges = player.querySelector('.player__slider');
Xconst skipButtons = player.querySelector('[data-skip]');
Xconst fullScreen = player.querySelector('.screen_toggle');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? ">" : "||";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRanges() {
video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}`;
}

function fullScreen() {
 const fullScreenRequest = video.requestFullscreen() video.webkitRequestFullScreen || video.mozRequestFullScreen || video.msRequestFullscreen;
 fullScreenRequest ? video.exitFullscreen() : fullScreenRequest;
}




video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

button.addEventListener('click', fullScreenRequest);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(skipButton.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRanges));
ranges.forEach(range => range.addEventListener('mousemove', handleRanges));




</script>
