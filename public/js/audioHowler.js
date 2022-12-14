var sound = new Howl({
  src: ["/images/background_music1.mp3"],
  autoplay: true,
  loop: true,
  volume: 0.2,
  onplay: function () {
    
  },
});
let muteBtnEl = document.querySelector(".mute");
let unmuteBtnEl = document.querySelector(".unmute");

sound.once("load", function () {
  muteBtnEl.style.display = "inline";
  sound.play();
});

muteBtnEl.addEventListener("click", function () {
  
  sound.mute(true);
  muteBtnEl.style.display = "none";
  unmuteBtnEl.style.display = "inline";
});

unmuteBtnEl.onclick = function () {
  sound.mute(false);
  unmuteBtnEl.style.display = "none";
  muteBtnEl.style.display = "inline";
};
