window.onload = () => {
    // js constanten van de straat
    const lock = document.getElementsByClassName('js--lock');
    var cameraEl = document.getElementById("js--camera");
    var planeEl = document.getElementById('js--lock');
    var cylinderEl = document.getElementById("js--cord");

    // js constanten van de kleedkamer
    const camera = document.getElementById("js--camera");
    const bank = document.getElementsByClassName('js--bank');
    const pickups = document.getElementsByClassName('js--pickup');
    const suit = document.getElementsByClassName('js--suit');
    const boots = document.getElementsByClassName('js--boots');
    const helmet = document.getElementsByClassName('js--helmet');
    const check = document.getElementById('js--check')
    const text = document.getElementById('eindetekst');
    var equipment = 0
    let hold = null;

    // constanten voor tp
    const position = document.getElementById('js--camera');
    const kleedkamerDeur = document.getElementsByClassName('js--door');
    const housedoor = document.getElementsByClassName('js--housedoor');
    const truck = document.getElementsByClassName('js--truck')
    const fire = document.getElementsByClassName('fire');

    // tp
    for (let i = 0; i < kleedkamerDeur.length; i++) {
        kleedkamerDeur[i].onmouseenter = (event) => {
            if (equipment == 4) {
                check.setAttribute('color', 'green');
                position.setAttribute("position", "10 1.63 -20");
                kleedkamerDeur[i].setAttribute('sound', "volume: 0")
                for (let i = 0; i < truck.length; i++) {
                  truck[i].setAttribute('sound', "volume: 1")
                  }
            }
        };
      }
  
      for (let i = 0; i < housedoor.length; i++) {
        housedoor[i].onmouseenter = (event) => {
        position.setAttribute("position", "0 1.63 0");
        
        for (let i = 0; i < truck.length; i++) {
          truck[i].setAttribute('sound', "volume: 0")
          }
          
          for (let i = 0; i < fire.length; i++) {
            fire[i].setAttribute('sound', "volume: 1")
            }
        };
  
  
      }


    // js straat
    function updateCylinderHeight() {
        var cameraPos;

        var cameraPos = cameraEl.getAttribute("position");
        var planePos = planeEl.getAttribute("position");

        var distance = cameraPos.distanceTo(planePos);
        
        cylinderEl.setAttribute("scale", { x: 0.04, y: distance, z: 0.04 });
        console.log(cylinderEl.getAttribute('scale'));
    }

    // for (let i=0; i < lock.length; i++) {
    //     lock[i].addEventListener('click', function() {
    //         console.log('Je kijkt naar het lock systeem');
    //         if (hold == false) {
    //             setInterval(updateCylinderHeight, 50);
    //         }
    //     });
    // }


    // js kleedkamer
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
                    equipment += 1;
                }
            })
        }
    }
    addListeners();

    for (let i=0; i < suit.length; i++) {
        suit[i].addEventListener('click', function() {
            console.log('Suit is aan');
            const planeSuit = document.getElementById('js--plSuit');
            planeSuit.setAttribute('color', 'green');
            this.remove();
            equipment += 1;
        });
    }

    for (let i=0; i < boots.length; i++) {
        boots[i].addEventListener('click', function() {
            console.log('Schoenen zijn aan');
            const planeBoots = document.getElementById('js--plBoots');
            planeBoots.setAttribute('color', 'green');
            this.remove();
            equipment += 1;
        });
    }

    for (let i=0; i < helmet.length; i++) {
        helmet[i].addEventListener('click', function() {
            console.log('Helm is op');
            const planeHelmet = document.getElementById('js--plHelm');
            planeHelmet.setAttribute('color', 'green');
            this.remove();
            equipment += 1;
        });
    }
}