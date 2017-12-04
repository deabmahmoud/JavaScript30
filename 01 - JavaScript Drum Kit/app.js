window.addEventListener("keypress", function(e) {
  var dataSelector = 'data-key="' + e.keyCode + '"';
  var audioElement = document.querySelector("audio[" + dataSelector + "]");
  var keyElement = document.querySelector(".key[" + dataSelector + "]");

  playAudio(audioElement, keyElement);
});

function playAudio(audioElement, keyElement) {
  if (audioElement) {
    keyElement.classList.add("playing");
    audioElement.currentTime = 0;
    audioElement.play();
  } else {
    return;
  }
}

var allKeyElements = document.querySelectorAll(".key");
allKeyElements.forEach(function(key) {
  key.addEventListener("transitionend", function(e) {
    if (e.propertyName === "transform") {
      key.classList.remove("playing");
    } else {
      return;
    }
  });
});
