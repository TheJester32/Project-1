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
