const right = document.getElementById("righthand")
const water = document.getElementById("js--water");
const fire = document.getElementsByClassName("fire")
const fire1 = document.getElementById("js--fire1");
const fire2 = document.getElementById("js--fire2");
const fire3 = document.getElementById("js--fire3");
const fire4 = document.getElementById("js--fire4");
const fire5 = document.getElementById("js--fire5");
const fire6 = document.getElementById("js--fire6");
const fire7 = document.getElementById("js--fire7");

const text = document.getElementById("js--eindetekst");

var spraying = false;

//water animation
function myTimer() {
    water.object3D.position.y += 0.01;
    water.object3D.position.x -= 0.01   ;
    setTimeout(second,25)
}

function second(){
    water.object3D.position.y -= 0.01;
    water.object3D.position.x += 0.01;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

animationspeed = 200



//vuur animation
rotate = () => {
    for(let i=0; i < fire.length; i++){
        rotation = randomNumber(30, 240)
        fire[i].setAttribute("rotation", "0 " + rotation + " 0")
    }
    
}

setInterval(rotate, animationspeed);




//bluslogica
AFRAME.registerComponent('raycaster-listen', {
	init: function () {
    this.el.addEventListener('raycaster-intersected', evt => {
      this.raycaster = evt.detail.el;
    });
    this.el.addEventListener('raycaster-intersected-cleared', evt => {
      this.raycaster = null;
    });
  },

  tick: function () {
    if (!this.raycaster) { return; }  

    let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
    if (!intersection) { return; }
    if(spraying){
        parent = document.getElementById("js--" + this.el.getAttribute("id"))
        if(parent.object3D.scale.x <= 0.2){
            parent.setAttribute("visible", false)
            parent.components.sound.stopSound();
            if (fire1.getAttribute("visible") == false 
            && fire2.getAttribute("visible") == false
            && fire3.getAttribute("visible") == false
            && fire4.getAttribute("visible") == false
            && fire5.getAttribute("visible") == false
            && fire6.getAttribute("visible") == false
            && fire7.getAttribute("visible") == false){
                scene.setAttribute("fog", "far: 26")
                scene.flushToDOM();
                text.setAttribute("position", "2.3 1.6 -0.5");
            }       
        }
        else{
            parent.object3D.scale.x -= 0.001
            parent.object3D.scale.y -= 0.001
            parent.object3D.scale.z -= 0.001
            
        }
    }
  }
});


//controllerlogica
AFRAME.registerComponent('triggerdown-logging',{
    init: function () {
        this.el.addEventListener('triggerdown', this.logTriggerDown);
    },
    logTriggerDown: function (evt) {
        spraying = true
        water.setAttribute("animation", "property: scale; to: 1 1 1; dur: 1000; easing: linear; loop: false");
        water.setAttribute("animation__2", "property: position; to: 0 1.6 7.5; dur: 1000; easing: linear; loop: false");
        water.components.sound.playSound();
        setInterval(myTimer,50);
    }
});

AFRAME.registerComponent('triggerup-logging',{
    init: function () {
        this.el.addEventListener('triggerup', this.logTriggerUp);
    },
    logTriggerUp: function (evt) {
        spraying = false
        clearInterval(myTimer);
        clearTimeout(second)
        water.removeAttribute("animation");
        water.removeAttribute("animation__2");
        water.setAttribute("scale", "1 0 1")
        water.setAttribute("position", "0 1.6 0")
        water.components.sound.stopSound();
    }
});
