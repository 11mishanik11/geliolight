// Бургер меню ------------------------
const headerMenu = document.querySelector('#header-menu')
const burgerBtn = document.querySelector('body')
const bodyPage = document.querySelector('body')



bodyPage.onresize = function() {
    if(window.innerWidth < 1111) {
        burgerBtn.setAttribute('aria-expanded', 'false')
        headerMenu.setAttribute('aria-hidden', 'true')
    } else {
        burgerBtn.removeAttribute('aria-expanded')
        headerMenu.removeAttribute('aria-hidden')
    }
}

burgerBtn.onclick = function() {
    if(headerMenu.classList.contains('active')) {
        menuHide()
    }
    else {
        menuShow()
    }
}

function menuShow() {
    headerMenu.classList.add('active')
    burgerBtn.setAttribute('aria-expanded', 'true')
    headerMenu.setAttribute('aria-hidden', 'false')
}

function menuHide() {
    headerMenu.classList.remove('active')
    burgerBtn.setAttribute('aria-expanded', 'false')
    headerMenu.setAttribute('aria-hidden', 'true')
}