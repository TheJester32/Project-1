const ochenkova = document.querySelector('.ochenkova')
const redneck = document.querySelector('.redneck')
const weird = document.querySelector('.weird')
const revenant = document.querySelector('.revenant')
const seer = document.querySelector('.seer')
const mountain = document.querySelector('.mountain')
const video = document.querySelector('.hunters__video')

ochenkova.addEventListener('click', () => {
    redneck.classList.remove('hunters__on')
    weird.classList.remove('hunters__on')
    revenant.classList.remove('hunters__on')
    seer.classList.remove('hunters__on')
    mountain.classList.remove('hunters__on')
    ochenkova.classList.add('hunters__on')
    video.src = './videos/ochenkova.mp4'
})

redneck.addEventListener('click', () => {
    ochenkova.classList.remove('hunters__on')
    weird.classList.remove('hunters__on')
    revenant.classList.remove('hunters__on')
    seer.classList.remove('hunters__on')
    mountain.classList.remove('hunters__on')
    redneck.classList.add('hunters__on')
    video.src = './videos/redneck.mp4'
})

weird.addEventListener('click', () => {
    ochenkova.classList.remove('hunters__on')
    redneck.classList.remove('hunters__on')
    revenant.classList.remove('hunters__on')
    seer.classList.remove('hunters__on')
    mountain.classList.remove('hunters__on')
    weird.classList.add('hunters__on')
    video.src = './videos/weird.mp4'
})

revenant.addEventListener('click', () => {
    ochenkova.classList.remove('hunters__on')
    weird.classList.remove('hunters__on')
    redneck.classList.remove('hunters__on')
    seer.classList.remove('hunters__on')
    mountain.classList.remove('hunters__on')
    revenant.classList.add('hunters__on')
    video.src = './videos/revenant.mp4'
})

seer.addEventListener('click', () => {
    ochenkova.classList.remove('hunters__on')
    weird.classList.remove('hunters__on')
    redneck.classList.remove('hunters__on')
    revenant.classList.remove('hunters__on')
    mountain.classList.remove('hunters__on')
    seer.classList.add('hunters__on')
    video.src = './videos/seer.mp4'
})

mountain.addEventListener('click', () => {
    ochenkova.classList.remove('hunters__on')
    weird.classList.remove('hunters__on')
    redneck.classList.remove('hunters__on')
    revenant.classList.remove('hunters__on')
    seer.classList.remove('hunters__on')
    mountain.classList.add('hunters__on')
    video.src = './videos/mountain.mp4'
})

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJodW50ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9jaGVua292YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vY2hlbmtvdmEnKVxyXG5jb25zdCByZWRuZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZG5lY2snKVxyXG5jb25zdCB3ZWlyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWlyZCcpXHJcbmNvbnN0IHJldmVuYW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmVuYW50JylcclxuY29uc3Qgc2VlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWVyJylcclxuY29uc3QgbW91bnRhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW91bnRhaW4nKVxyXG5jb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW50ZXJzX192aWRlbycpXHJcblxyXG5vY2hlbmtvdmEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZWRuZWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2h1bnRlcnNfX29uJylcclxuICAgIHdlaXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2h1bnRlcnNfX29uJylcclxuICAgIHJldmVuYW50LmNsYXNzTGlzdC5yZW1vdmUoJ2h1bnRlcnNfX29uJylcclxuICAgIHNlZXIuY2xhc3NMaXN0LnJlbW92ZSgnaHVudGVyc19fb24nKVxyXG4gICAgbW91bnRhaW4uY2xhc3NMaXN0LnJlbW92ZSgnaHVudGVyc19fb24nKVxyXG4gICAgb2NoZW5rb3ZhLmNsYXNzTGlzdC5hZGQoJ2h1bnRlcnNfX29uJylcclxuICAgIHZpZGVvLnNyYyA9ICcuL3ZpZGVvcy9vY2hlbmtvdmEubXA0J1xyXG59KVxyXG5cclxucmVkbmVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG9jaGVua292YS5jbGFzc0xpc3QucmVtb3ZlKCdodW50ZXJzX19vbicpXHJcbiAgICB3ZWlyZC5jbGFzc0xpc3QucmVtb3ZlKCdodW50ZXJzX19vbicpXHJcbiAgICByZXZlbmFudC5jbGFzc0xpc3QucmVtb3ZlKCdodW50ZXJzX19vbicpXHJcbiAgICBzZWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2h1bnRlcnNfX29uJylcclxuICAgIG1vdW50YWluLmNsYXNzTGlzdC5yZW1vdmUoJ2h1bnRlcnNfX29uJylcclxuICAgIHJlZG5lY2suY2xhc3NMaXN0LmFkZCgnaHVudGVyc19fb24nKVxyXG4gICAgdmlkZW8uc3JjID0gJy4vdmlkZW9zL3JlZG5lY2subXA0J1xyXG59KVxyXG5cclxud2VpcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvY2hlbmtvdmEuY2xhc3NMaXN0LnJlbW92ZSgnaHVudGVyc19fb24nKVxyXG4gICAgcmVkbmVjay5jbGFzc0xpc3QucmVtb3ZlKCdodW50ZXJzX19vbicpXHJcbiAgICByZXZlbmFudC5jbGFzc0xpc3QucmVtb3ZlKCdodW50ZXJzX19vbicpXHJcbiAgICBzZWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2h1bnRlcnNfX29uJylcclxuICAgIG1vdW50YWluLmNsYXNzTGlzdC5yZW1vdmUoJ2h1bnRlcnNfX29uJylcclxuICAgIHdlaXJkLmNsYXNzTGlzdC5hZGQoJ2h1bnRlcnNfX29uJylcclxuICAgIHZpZGVvLnNyYyA9ICcuL3ZpZGVvcy93ZWlyZC5tcDQnXHJcbn0pXHJcblxyXG5yZXZlbmFudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG9jaGVua292YS5jbGFzc0xpc3QucmVtb3ZlKCdodW50ZXJzX19vbicpXHJcbiAgICB3ZWlyZC5jbGFzc0xpc3QucmVtb3ZlKCdodW50ZXJzX19vbicpXHJcbiAgICByZWRuZWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2h1bnRlcnNfX29uJylcclxuICAgIHNlZXIuY2xhc3NMaXN0LnJlbW92ZSgnaHVudGVyc19fb24nKVxyXG4gICAgbW91bnRhaW4uY2xhc3NMaXN0LnJlbW92ZSgnaHVudGVyc19fb24nKVxyXG4gICAgcmV2ZW5hbnQuY2xhc3NMaXN0LmFkZCgnaHVudGVyc19fb24nKVxyXG4gICAgdmlkZW8uc3JjID0gJy4vdmlkZW9zL3JldmVuYW50Lm1wNCdcclxufSlcclxuXHJcbnNlZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvY2hlbmtvdmEuY2xhc3NMaXN0LnJlbW92ZSgnaHVudGVyc19fb24nKVxyXG4gICAgd2VpcmQuY2xhc3NMaXN0LnJlbW92ZSgnaHVudGVyc19fb24nKVxyXG4gICAgcmVkbmVjay5jbGFzc0xpc3QucmVtb3ZlKCdodW50ZXJzX19vbicpXHJcbiAgICByZXZlbmFudC5jbGFzc0xpc3QucmVtb3ZlKCdodW50ZXJzX19vbicpXHJcbiAgICBtb3VudGFpbi5jbGFzc0xpc3QucmVtb3ZlKCdodW50ZXJzX19vbicpXHJcbiAgICBzZWVyLmNsYXNzTGlzdC5hZGQoJ2h1bnRlcnNfX29uJylcclxuICAgIHZpZGVvLnNyYyA9ICcuL3ZpZGVvcy9zZWVyLm1wNCdcclxufSlcclxuXHJcbm1vdW50YWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb2NoZW5rb3ZhLmNsYXNzTGlzdC5yZW1vdmUoJ2h1bnRlcnNfX29uJylcclxuICAgIHdlaXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2h1bnRlcnNfX29uJylcclxuICAgIHJlZG5lY2suY2xhc3NMaXN0LnJlbW92ZSgnaHVudGVyc19fb24nKVxyXG4gICAgcmV2ZW5hbnQuY2xhc3NMaXN0LnJlbW92ZSgnaHVudGVyc19fb24nKVxyXG4gICAgc2Vlci5jbGFzc0xpc3QucmVtb3ZlKCdodW50ZXJzX19vbicpXHJcbiAgICBtb3VudGFpbi5jbGFzc0xpc3QuYWRkKCdodW50ZXJzX19vbicpXHJcbiAgICB2aWRlby5zcmMgPSAnLi92aWRlb3MvbW91bnRhaW4ubXA0J1xyXG59KVxyXG4iXSwiZmlsZSI6Imh1bnRlcnMuanMifQ==
