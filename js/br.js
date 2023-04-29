const main = document.querySelector('main')

const brasileiro1 = document.querySelector('[brasileiro1]')
const brasileiro2 = document.querySelector('[brasileiro2]')
const brasileiro3 = document.querySelector('[brasileiro3]')
const brasileiro4 = document.querySelector('[brasileiro4]')
const brasileiro5 = document.querySelector('[brasileiro5]')
const brasileiro6 = document.querySelector('[brasileiro6]')
const brasileiro7 = document.querySelector('[brasileiro7]')
const brasileiro8 = document.querySelector('[brasileiro8]')


brasileiro1.onclick = e => {
    ajax(e, '../pagesProdutos/brasileiros/brasileiro1.html')
}
brasileiro2.onclick = e => {
    ajax(e, '../pagesProdutos/brasileiros/brasileiro2.html')
}
brasileiro3.onclick = e => {
    ajax(e, '../pagesProdutos/brasileiros/brasileiro3.html')
}
brasileiro4.onclick = e => {
    ajax(e, '../pagesProdutos/brasileiros/brasileiro4.html')
}
brasileiro5.onclick = e => {
    ajax(e, '../pagesProdutos/brasileiros/brasileiro5.html')
}
brasileiro6.onclick = e => {
    ajax(e, '../pagesProdutos/brasileiros/brasileiro6.html')
}
brasileiro7.onclick = e => {
    ajax(e, '../pagesProdutos/brasileiros/brasileiro7.html')
}
brasileiro8.onclick = e => {
    ajax(e, '../pagesProdutos/brasileiros/brasileiro8.html')
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


const atacado = document.querySelectorAll('[atacado]')
