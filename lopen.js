window.onload = () => {
    console.log('Lopen')

    const lopen = document.getElementsByClassName('js--position');
    const camera = document.getElementById('js--camera');

    for (let i = 0; i < lopen.length; i++) {
        lopen[i].addEventListener('click', function() {
            let att = document.createAttribute('animation');
            att.value = 'property: position; easing: linear; dur: 2000; to: ' +
            this.getAttribute('position').x + ' 1.63 ' + (this.getAttribute('position').z - ' 10 ');
            camera.setAttribute('animation', att.value);
        })
    }
}