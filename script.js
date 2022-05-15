const image = document.querySelector('img');
const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
const hue = document.getElementById('hue');
const saturation = document.getElementById('saturation');
const bluring = document.getElementById('blur');
const opacityy = document.getElementById('opacity');
const invert = document.getElementById('invert');
const sepia = document.getElementById('sepia');
const resetBtn = document.getElementById('reset');
const randomizeBtn = document.getElementById('randomize');

function processing() {
    image.style.filter ="brightness(" + (brightness.value) * 2 + "%)" + " " +
                        "contrast(" + (contrast.value) * 2 + "%)" + " " +
                        "hue-rotate(" + (hue.value) * 3.6 + "deg)" + " " +
                        "saturate(" + (saturation.value) * 2 + "%)" + " " +
                        "blur(" + (bluring.value) * 0.1 + "px)" + " " +
                        "opacity(" + opacityy.value + "%)" + " " +
                        "invert(" + invert.value + "%)" + " " +
                        "sepia(" + sepia.value + "%)";
}

processing();

brightness.addEventListener("input", function(){
    processing();
});
contrast.addEventListener("input", function(){
    processing();
});
hue.addEventListener("input", function(){
    processing();
});
saturation.addEventListener("input", function(){
    processing();
});
bluring.addEventListener("input", function(){
    processing();
});
opacityy.addEventListener("input", function(){
    processing();
});
invert.addEventListener("input", function(){
    processing();
});
sepia.addEventListener("input", function(){
    processing();
});

resetBtn.addEventListener("click", function(){
    brightness.value = 50;
    contrast.value = 50;
    hue.value = 0;
    saturation.value = 50;
    bluring.value = 0;
    opacityy.value = 100;
    invert.value = 0;
    sepia.value = 0;
    processing();
});

function randomNum() {
    return Math.floor((Math.random()*50) + 25);
}

randomizeBtn.addEventListener("click", function(){
    
    brightness.value = randomNum();
    contrast.value = randomNum();
    hue.value = randomNum();
    saturation.value = randomNum();
    bluring.value = randomNum();
    opacityy.value = 100;
    invert.value = 0;
    sepia.value = randomNum();
    processing();
});