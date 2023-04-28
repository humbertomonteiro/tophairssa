const main = document.querySelector('main')

const cacheado1 = document.querySelector('[cacheado1]')
const cacheado2 = document.querySelector('[cacheado2]')
const cacheado3 = document.querySelector('[cacheado3]')
const cacheado4 = document.querySelector('[cacheado4]')


cacheado1.onclick = e => {
    ajax(e, '../pagesProdutos/cacheado/cacheado1.html')
}
cacheado2.onclick = e => {
    ajax(e, '../pagesProdutos/cacheado/cacheado2.html')
}
cacheado3.onclick = e => {
    ajax(e, '../pagesProdutos/cacheado/cacheado3.html')
}
cacheado4.onclick = e => {
    ajax(e, '../pagesProdutos/cacheado/cacheado4.html')
}

const about = document.querySelector('[about]')
const howShopping = document.querySelector('[how-shopping]')
const security = document.querySelector('[security]')
const envio = document.querySelector('[envio]')
const paymant = document.querySelector('[paymant]')
const guarantee = document.querySelector('[guarantee]')

about.onclick = e => {
    ajax(e, '../pages-footers/about.html')
}
howShopping.onclick = e => {
    ajax(e, '../pages-footers/how-shopping.html')
}
security.onclick = e => {
    ajax(e, '../pages-footers/security.html')
}
envio.onclick = e => {
    ajax(e, '../pages-footers/envio.html')
}
paymant.onclick = e => {
    ajax(e, '../pages-footers/paymant.html')
}
guarantee.onclick = e => {
    ajax(e, '../pages-footers/guarantee.html')
}

function ajax(event, url) {
    event.preventDefault()
    fetch(url)
        .then(resp => resp.text())
        .then(page => main.innerHTML = page)

    window.scroll(0, 0)
}

const bars = document.querySelector('.bars')
const links = document.querySelector('.links')

bars.onclick = e => {
    links.classList.toggle('show')
    links.classList.toggle('links')
}