let walljet = document.getElementById("js--jet")
let jetholding = document.getElementById("js--jet--holding")

let planeSuit = document.getElementById('js--plSuit');
let planeBoots = document.getElementById('js--plBoots');
let planeHelmet = document.getElementById('js--plHelmet');
let planeBrandspuit = document.getElementById('js--plBrandspuit')

let lock = document.getElementsByClassName('js--lock');
let cable = document.getElementById('js--cable');

let equipment = 0
let aangesloten = null


AFRAME.registerComponent('grip-logging',{
    init: function () {
      this.el.addEventListener('gripdown', this.logGrip);
    },
    logGrip: function (evt) {
        let rightpos = right.object3D.getWorldPosition(new THREE.Vector3())
        let firstdoorpos = firstdoor.object3D.getWorldPosition(new THREE.Vector3())
        let seconddoorpos = seconddoor.object3D.getWorldPosition(new THREE.Vector3())
        let thirddoorpos = thirddoor.object3D.getWorldPosition(new THREE.Vector3())

        let bootspos = boots.object3D.getWorldPosition(new THREE.Vector3())
        let suitpos = suit.object3D.getWorldPosition(new THREE.Vector3())
        let helmetpos = helmet.object3D.getWorldPosition(new THREE.Vector3())

        let jetpos = walljet.object3D.getWorldPosition(new THREE.Vector3())


        if ((rightpos.x > (firstdoorpos.x-1) && rightpos.x < (firstdoorpos.x+1)) && (rightpos.y > (firstdoorpos.y-1) && rightpos.y < (firstdoorpos.y+1)) && (rightpos.z > (firstdoorpos.z-0.5) && rightpos.z < (firstdoorpos.z+0.5))){
          rig.setAttribute("position", "1.5 -15 0")
          rig.setAttribute("rotation", "0 0 0")          
        }

        if (equipment == 4){
          if ((rightpos.x > (seconddoorpos.x-1) && rightpos.x < (seconddoorpos.x+1)) &&  (rightpos.y > (seconddoorpos.y-1) && rightpos.y < (seconddoorpos.y+1)) && (rightpos.z > (seconddoorpos.z-0.5) && rightpos.z < (seconddoorpos.z+0.5))){
            rig.setAttribute("position", "5 0 -15")
            rig.setAttribute("rotation", "0 0 0")
          }
        }

        if (aangesloten == 'aangesloten'){
          if ((rightpos.x > (thirddoorpos.x-1) && rightpos.x < (thirddoorpos.x+1)) &&  (rightpos.y > (thirddoorpos.y-1) && rightpos.y < (thirddoorpos.y+1)) && (rightpos.z > (thirddoorpos.z-0.5) && rightpos.z < (thirddoorpos.z+0.5))){
            rig.setAttribute("position", "-3 -10 -4")
            rig.setAttribute("rotation", "0 225 0")
            scene.setAttribute("fog", "type: linear; color: #AAA; density: 0.2; near: 0; far: 6;")
            scene.flushToDOM();
          }
        }

        

  
        else if ((rightpos.x > (jetpos.x-0.5) && rightpos.x < (jetpos.x+0.5)) && (rightpos.y > (jetpos.y-0.5) && rightpos.y < (jetpos.y+0.5)) && (rightpos.z > (jetpos.z-0.5) && rightpos.z < (jetpos.z+0.5))){
          planeBrandspuit.setAttribute('color', 'green');  
          walljet.setAttribute("visible",false);
          jetholding.setAttribute("visible",true);
          equipment += 1;
        }

        else if ((rightpos.x > (bootspos.x-0.5) && rightpos.x < (bootspos.x+0.5)) && (rightpos.y > (bootspos.y-0.5) && rightpos.y < (bootspos.y+0.5)) && (rightpos.z > (bootspos.z-0.5) && rightpos.z < (bootspos.z+0.5))){
          planeBoots.setAttribute('color', 'green');  
          boots.setAttribute("visible", "false")
          equipment += 1;
        }

        else if ((rightpos.x > (suitpos.x-0.5) && rightpos.x < (suitpos.x+0.5)) && (rightpos.y > (suitpos.y-0.5) && rightpos.y < (suitpos.y+0.5)) && (rightpos.z > (suitpos.z-0.5) && rightpos.z < (suitpos.z+0.5))){
          planeSuit.setAttribute('color', 'green');
          suit.setAttribute("visible", "false")
          equipment += 1;
        }

        else if ((rightpos.x > (helmetpos.x-0.5) && rightpos.x < (helmetpos.x+0.5)) && (rightpos.y > (helmetpos.y-0.5) && rightpos.y < (helmetpos.y+0.5)) && (rightpos.z > (helmetpos.z-0.5) && rightpos.z < (helmetpos.z+0.5))){
          planeHelmet.setAttribute('color', 'green');
          helmet.setAttribute("visible", "false")
          helmOp()
          equipment += 1;
        }
    }
  });


helmOp = () =>{
    const helmetUpperPov = document.getElementById('js--upperPov');
    const helmetLowerPov = document.getElementById('js--lowerPov');
    helmetUpperPov.setAttribute('src', './assets/models/materials/pov-upper-helmet.png');
    helmetUpperPov.setAttribute('position', '0 0.5 -0.5');
    helmetUpperPov.setAttribute('width', '5');
    helmetUpperPov.setAttribute('height', '0.5');

    helmetLowerPov.setAttribute('src', './assets/models/materials/pov-lower-helmet.png');
    helmetLowerPov.setAttribute('position', '0 -0.5 -0.5');
    helmetLowerPov.setAttribute('width', '5');
    helmetLowerPov.setAttribute('height', '0.3');
}
    


lock[0].addEventListener('click', function() {
cable.setAttribute('src', '#cable-obj');
cable.setAttribute('mtl', '#cable-material');
aangesloten = 'aangesloten';
const lockText = document.getElementById('js--lockText');
lockText.setAttribute('text', 'color: green;')
const doorText = document.getElementById('js--doorText');
doorText.remove();
});
