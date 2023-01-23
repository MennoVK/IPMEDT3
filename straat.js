window.onload = () => {
    const smoke = document.getElementById('smoke-id');
    const lock = document.getElementsByClassName('js--lock')

    for (let i=0; i < lock.length; i++) {
        lock[i].addEventListener('click', function() {
            console.log('Je kijkt naar het lock systeem');
        })
    }
}