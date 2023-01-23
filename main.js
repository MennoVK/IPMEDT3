window.onload = () =>{
    const camera = document.getElementById("js--camera");
    const bank = document.getElementsByClassName('js--bank');

    const pickups = document.getElementsByClassName('js--pickup');
    const clothes = document.getElementsByClassName('js--clothes');
    const placeholder = document.getElementsByClassName('js--kapstok');
    const door = document.getElementsByClassName('js--door');

    let scene = document.getElementById('js--scene');

    let hold = null;

    let helmet = null;

    for (let i=0; i < bank.length; i++) {
        bank[i].addEventListener('click', function(evt) {
            let att = document.createAttribute("animation");
            att.value = "property: position; easing: linear; dur: 2000; to: " +
            this.getAttribute('position').x + " 0 " + this.getAttribute('position').z;
            camera.setAttribute('animation', att.value);
        });
    }

    function addListeners() {
        for (let i=0; i < pickups.length; i++) {
            pickups[i].addEventListener('click', function(evt){
                if(hold == null) {
                    camera.innerHTML += `<a-obj-model class="js--brandslang" src="#brandslang-obj" position="0.3 0 -0.3" scale="0.1 0.1 0.1" color="white"></a-obj-model>`;
                    hold = "box";
                    this.remove();
                }
            })
        }
    }
    addListeners();

    for (let i=0; i < clothes.length; i++) {
        clothes[i].addEventListener('click', function(evt){
            if (helmet == null) {
                const text = document.getElementById("js--text");
                text.setAttribute('text', 'value: Je hebt je helm opgedaan!; color: black;');
                text.setAttribute('position', '-1.7 0.2 -1.7');
                this.remove();
                helmet = "taken";
                console.log(text)
            }
        })
    }

    for(let i=0; i < placeholder.length; i++) {
        placeholder[i].addEventListener('click', function(evt) {
            if (hold == "box") {
                let box = document.createElement('a-box');
                box.setAttribute("class", "js--pickup js--interact");
                box.setAttribute("color", "green");
                box.setAttribute("position", {x: this.getAttribute('position').x,
                y:"0.5", z: this.getAttribute('position').z});
                scene.appendChild(box);
                document.getElementById("js--hold").remove();
                addListeners();
                hold = null;
            }
        });
    }
}