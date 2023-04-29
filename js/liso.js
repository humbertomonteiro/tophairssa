const main = document.querySelector('main')

const liso1 = document.querySelector('[liso1]')
const liso2 = document.querySelector('[liso2]')
const liso3 = document.querySelector('[liso3]')
const liso4 = document.querySelector('[liso4]')
const liso5 = document.querySelector('[liso5]')
const liso6 = document.querySelector('[liso6]')
const liso7 = document.querySelector('[liso7]')
const liso8 = document.querySelector('[liso8]')


liso1.onclick = e => {
    ajax(e, '../pagesProdutos/liso/liso1.html')
}
liso2.onclick = e => {
    ajax(e, '../pagesProdutos/liso/liso2.html')
}
liso3.onclick = e => {
    ajax(e, '../pagesProdutos/liso/liso3.html')
}
liso4.onclick = e => {
    ajax(e, '../pagesProdutos/liso/liso4.html')
}
liso5.onclick = e => {
    ajax(e, '../pagesProdutos/liso/liso5.html')
}
liso6.onclick = e => {
    ajax(e, '../pagesProdutos/liso/liso6.html')
}
liso7.onclick = e => {
    ajax(e, '../pagesProdutos/liso/liso7.html')
}
liso8.onclick = e => {
    ajax(e, '../pagesProdutos/liso/liso8.html')
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
