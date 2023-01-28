// window.onload = () => {
//     // js constanten van de straat
    const lock = document.getElementsByClassName('js--lock');
    const cable = document.getElementById('js--cable');

//     // js constanten van de kleedkamer
//     const camera = document.getElementById("js--camera");
//     const bank = document.getElementsByClassName('js--bank');
//     const pickups = document.getElementsByClassName('js--pickup');
//     const suit = document.getElementsByClassName('js--suit');
//     const boots = document.getElementsByClassName('js--boots');
//     const helmet = document.getElementsByClassName('js--helmet');
//     const check = document.getElementById('js--check')
//     const text = document.getElementById('eindetekst');
    var equipment = 0
    let hold = null;

//     // constanten voor tp
//     const position = document.getElementById('js--camera');
//     const kleedkamerDeur = document.getElementsByClassName('js--door');
//     const housedoor = document.getElementsByClassName('js--housedoor');
//     const truck = document.getElementsByClassName('js--truck')
//     const fire = document.getElementsByClassName('fire');
    let aangesloten = null;

//     // voor in huis
//     var geblust = 0;

//     // tp
//     for (let i = 0; i < kleedkamerDeur.length; i++) {
//         kleedkamerDeur[i].onmouseclick = (event) => {
//             if (equipment == 4) {
//                 check.setAttribute('color', 'green');
//                 rig.setAttribute("position", "10 1.63 -20");
//                 kleedkamerDeur[i].setAttribute('sound', "volume: 0")
//                 for (let i = 0; i < truck.length; i++) {
//                   truck[i].setAttribute('sound', "volume: 1")
//                   }
//             }
//         };
//     }

  
//     for (let i = 0; i < housedoor.length; i++) {
//         housedoor[i].onmouseenter = (event) => {
//             if (aangesloten == 'aangesloten') {
//                 position.setAttribute("position", "0 1.63 0");
        
//                 for (let i = 0; i < truck.length; i++) {
//                     truck[i].setAttribute('sound', "volume: 0")
//                 }
          
//                 for (let i = 0; i < fire.length; i++) {
//                     fire[i].setAttribute('sound', "volume: 1")
//                 }
//             }
//         };
//     }


//     // js straat
    for (let i=0; i < lock.length; i++) {
        lock[i].addEventListener('click', function() {
            console.log('Je kijkt naar het lock systeem');
            cable.setAttribute('src', '#cable-obj');
            cable.setAttribute('mtl', '#cable-material');
            aangesloten = 'aangesloten';

            const lockText = document.getElementById('js--lockText');
            lockText.setAttribute('text', 'color: green;')

            const doorText = document.getElementById('js--doorText');
            doorText.remove();
        });
    }


//     // js kleedkamer
//     for (let i=0; i < bank.length; i++) {
//         bank[i].addEventListener('click', function(evt) {
//             let att = document.createAttribute("animation");
//             att.value = "property: position; easing: linear; dur: 2000; to: " +
//             this.getAttribute('position').x + " 0 " + this.getAttribute('position').z;
//             camera.setAttribute('animation', att.value);
//         });
//     }

//     function addListeners() {
//         for (let i=0; i < pickups.length; i++) {
//             pickups[i].addEventListener('click', function(evt){
//                 if(hold == null) {
//                     camera.innerHTML += `<a-obj-model class="js--brandslang" src="#brandslang-obj" position="0.3 0 -0.3" scale="0.1 0.1 0.1" color="white"></a-obj-model>`;
//                     hold = "box";
//                     this.remove();
//                     equipment += 1;
//                     helmOp();
//                 }
//             })
//         }
//     }
//     addListeners();

//     

//     

//     // voor in huis
//     for (let i = 0; i < fire.length; i++) {
//         fire[i].onmouseenter = (event) => {
//             if (geblust == 0) {
//                 text.setAttribute('position', '-2 3 1')
//             }
//         };
//       }


// }