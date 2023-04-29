const interval = setInterval(() => {
    nextImg()
}, 5000)

let count = 1

function nextImg() {
    count++
    if(count > 3) {
        count = 1
    }

    document.querySelector(`#radio${count}`).checked = true
}


const main = document.querySelector('main')

const brasileiro = document.querySelectorAll('[brasileiro]')

const whatsapp = document.querySelector('[whatsapp]')
const frete = document.querySelector('[frete]')
const comments = document.querySelector('[comments]')

const about = document.querySelector('[about]')
const howShopping = document.querySelector('[how-shopping]')
const security = document.querySelector('[security]')
const envio = document.querySelector('[envio]')
const paymant = document.querySelector('[paymant]')
const guarantee = document.querySelector('[guarantee]')



frete.onclick = e => {
    ajax(e, 'pages/fretegratis.html')
}
comments.onclick = e => {
    ajax(e, 'pages/comments.html')
}

about.onclick = e => {
    ajax(e, 'pages-footers/about.html')
}
howShopping.onclick = e => {
    ajax(e, 'pages-footers/how-shopping.html')
}
security.onclick = e => {
    ajax(e, 'pages-footers/security.html')
}
envio.onclick = e => {
    ajax(e, 'pages-footers/envio.html')
}
paymant.onclick = e => {
    ajax(e, 'pages-footers/paymant.html')
}
guarantee.onclick = e => {
    ajax(e, 'pages-footers/guarantee.html')
}


function ajax(event, url) {
    event.preventDefault()
    fetch(url)
        .then(resp => resp.text())
        .then(page => main.innerHTML = page)

    clearInterval(interval)

    window.scroll(0, 0)
}

const bars = document.querySelector('.bars')
const links = document.querySelector('.links')

bars.onclick = e => {
    links.classList.toggle('show')
    links.classList.toggle('links')
}
