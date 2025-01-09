window.addEventListener('scroll', function () {
    var element = document.querySelector('.section-2-h1')
    var position = element.getBoundingClientRect()

    if (position.top < window.innerHeight && position.botton >= 0) {
        element.classList.add('visible')
    } else {
        element.classList.remove('visible')
    }
})

window.addEventListener('scroll', function () {
    var element = document.querySelector('.frase-header')
    var position = element.getBoundingClientRect()

    if (position.top < window.innerHeight && position.botton >= 0) {
        element.classList.add('visible')
    } else {
        element.classList.remove('visible')
    }
})