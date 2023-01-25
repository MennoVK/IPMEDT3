window.onload = () =>{
    console.log('halloo')
    const camera = document.getElementById("js--camera");
    const bank = document.getElementsByClassName('js--bank');

    const pickups = document.getElementsByClassName('js--pickup');
    const suit = document.getElementsByClassName('js--suit');

    const text = document.getElementById('eindetekst');

    let hold = null;


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

    for (let i=0; i < suit.length; i++) {
        console.log('Suit is aan');
        const planeSuit = document.getElementById('js--plSuit');
        planeSuit.setAttribute('color', 'green');
    }

    // for(let i=0; i < placeholder.length; i++) {
    //     placeholder[i].addEventListener('click', function(evt) {
    //         if (hold == "box") {
    //             let box = document.createElement('a-box');
    //             box.setAttribute("class", "js--pickup js--interact");
    //             box.setAttribute("color", "green");
    //             box.setAttribute("position", {x: this.getAttribute('position').x,
    //             y:"0.5", z: this.getAttribute('position').z});
    //             scene.appendChild(box);
    //             document.getElementById("js--hold").remove();
    //             addListeners();
    //             hold = null;
    //         }
    //     });
    // }

    // van Cas: pseudocode eindetekst verplaatsen
    // als laatste vuur uit is:
        // text.setAttribute('position', "2 3 1");
}