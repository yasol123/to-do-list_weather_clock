const body = document.querySelector("body");
const IMG_NUMBER = 0;

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber}.mp4`;
    image.classList.add('bgImage');
    body.prepend(image);
    //you need if you use API -> image.addEventListener("loadend", handleImgLoad)
}
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();