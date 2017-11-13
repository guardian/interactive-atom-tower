import YouTubePlayer from '../components/youtube-player/index.html'
import VideoPlayer from '../components/video/index.html'

//initialise YouTube player
const YouTubeEls = document.querySelectorAll(".visual-element--youtube");
let players = [];

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


//initialise video player
const VideoEls = document.querySelectorAll(".visual-element--video");
let videoPlayers = [];

[].slice.apply(VideoEls).forEach((el) => {
    const player = new VideoPlayer({
    	target: el,
        data: {
            loop: true,
            targetEl: el,
            mobileSrc: el.getAttribute("data-mobileSrc"),
            desktopSrc: el.getAttribute("data-desktopSrc")
        }
    })
    videoPlayers.push(player);
}); 

