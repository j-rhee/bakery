
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'cIJ8-HGWlKw',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "cIJ8-HGWlKw",
    },
  });
};
