let offset = 0
const slider = document.querySelector('.weapons__slider-line')
const buttonNext = document.querySelector('.weapons__slider-button-next')
const buttonPrev = document.querySelector('.weapons__slider-button-prev')


buttonNext.addEventListener('click', () => {
    offset += 825
    if(offset > 2475) {
        offset = 0
    }
    slider.style.left = -offset + 'px'
})


buttonPrev.addEventListener('click', () => {
    offset -= 825
    if(offset < 0) {
        offset = 2475
    }
    slider.style.left = -offset + 'px'
})
