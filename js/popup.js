const popupClose = document.querySelector('.popup__close-button')
const signUp = document.querySelector('.signup-button')
const popup = document.querySelector('.popup')

signUp.addEventListener('click', () => {
popup.classList.remove('visually-hidden')
})

popupClose.addEventListener('click', () => {
    popup.classList.add('visually-hidden')
})