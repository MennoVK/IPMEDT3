AFRAME.registerComponent('grip-logging',{
    init: function () {
      this.el.addEventListener('gripdown', this.logGrip);
    },
    logGrip: function (evt) {
        rightpos = (right.object3D.position).add(rig.object3D.position)
        jetpos = jet.object3D.position
        console.log(rightpos)
        console.log(jetpos)
        if ((rightpos.x > (jetpos.x-0.5) && rightpos.x < (jetpos.x+0.5)) && (rightpos.y > (jetpos.y-0.5) && rightpos.y < (jetpos.y+0.5)) && (rightpos.z > (jetpos.z-0.5) && rightpos.z < (jetpos.z+0.5))){
          jet.setAttribute("visible",false);
          jetholding.setAttribute("visible",true);
        }
    }
  });