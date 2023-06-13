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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IG9mZnNldCA9IDBcclxuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXBvbnNfX3NsaWRlci1saW5lJylcclxuY29uc3QgYnV0dG9uTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWFwb25zX19zbGlkZXItYnV0dG9uLW5leHQnKVxyXG5jb25zdCBidXR0b25QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXBvbnNfX3NsaWRlci1idXR0b24tcHJldicpXHJcblxyXG5cclxuYnV0dG9uTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG9mZnNldCArPSA4MjVcclxuICAgIGlmKG9mZnNldCA+IDI0NzUpIHtcclxuICAgICAgICBvZmZzZXQgPSAwXHJcbiAgICB9XHJcbiAgICBzbGlkZXIuc3R5bGUubGVmdCA9IC1vZmZzZXQgKyAncHgnXHJcbn0pXHJcblxyXG5cclxuYnV0dG9uUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG9mZnNldCAtPSA4MjVcclxuICAgIGlmKG9mZnNldCA8IDApIHtcclxuICAgICAgICBvZmZzZXQgPSAyNDc1XHJcbiAgICB9XHJcbiAgICBzbGlkZXIuc3R5bGUubGVmdCA9IC1vZmZzZXQgKyAncHgnXHJcbn0pXHJcbiJdLCJmaWxlIjoic2xpZGVyLmpzIn0=
