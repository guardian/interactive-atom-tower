import VideoPlayer from '../components/video/index.html'

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

