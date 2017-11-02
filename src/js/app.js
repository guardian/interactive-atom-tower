import YouTubePlayer from '../components/youtube-player/index.html'

//initialise YouTube player
const YouTubeEls = document.querySelectorAll(".visual-element--youtube");
let players = [];

console.log("test");

[].slice.apply(YouTubeEls).forEach((el) => {
    const player = new YouTubePlayer({
    	target: el,
        data: {
            video: el.getAttribute("video"), // video ID
            loop: true,
            loading: false
        }
    })
    players.push(player);
}); 