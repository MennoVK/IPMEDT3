const paarsecirkel = document.getElementsByClassName('js--paarsecirckel');

// lopen tussen paarse stippen
for(let i=0; i < paarsecirkel.length; i++){
    paarsecirkel[i].onclick = (event) =>{
        let att = document.createAttribute("animation");
        circleposition = paarsecirkel[i].getAttribute("position");
        var positionto = (String(circleposition.x) + " " + String(rig.object3D.position.y) + " " + String(circleposition.z));
        att.value = "property: position; easing: linear; dur: 2500; to:" + positionto
        rig.setAttribute("animation", att.value);
    }
}

