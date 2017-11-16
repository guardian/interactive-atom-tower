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



//initialise share tools

const twitterBaseUrl = 'https://twitter.com/intent/tweet?text=';
const facebookBaseUrl = 'https://www.facebook.com/dialog/feed?display=popup&app_id=741666719251986&redirect_uri=http://www.theguardian.com&link=';
const googleBaseUrl = 'https://plus.google.com/share?url=';

function share(title, shareURL, fbImg, twImg, hashTag) {
    var twImgText = twImg ? ` ${twImg.trim()} ` : ' ';
    var fbImgQry = fbImg ? `&picture=${encodeURIComponent(fbImg)}` : '';
    return function (network, extra='') {
        var twitterMessage = `${extra}${title}`;
        var shareWindow;

        if (network === 'twitter') {
            shareWindow = twitterBaseUrl + encodeURIComponent(twitterMessage + ' ') + shareURL;
        } else if (network === 'facebook') {
            shareWindow = facebookBaseUrl + shareURL;
        } else if (network === 'email') {
            shareWindow = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + shareURL;
        } else if (network === 'google') {
            shareWindow = googleBaseUrl + shareURL;
        }

        window.open(shareWindow, network + 'share', 'width=640,height=320');
    }
}


var shareFn = share('The tower next door: Life in the shadow of Grenfell', 'https://gu.com/p/7t2cg', '');
[].slice.apply(document.querySelectorAll('.interactive-share')).forEach(shareEl => {
    var network = shareEl.getAttribute('data-network');
    shareEl.addEventListener('click',() => shareFn(network));
});
