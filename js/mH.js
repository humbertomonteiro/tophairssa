const main = document.querySelector('main')

const mH1 = document.querySelector('[mH1]')
const mH2 = document.querySelector('[mH2]')
const mH3 = document.querySelector('[mH3]')
const mH4 = document.querySelector('[mH4]')
const mH5 = document.querySelector('[mH5]')
const mH6 = document.querySelector('[mH6]')

mH1.onclick = e => {
    ajax(e, '../pagesProdutos/megaHair/mH1.html')
}
mH2.onclick = e => {
    ajax(e, '../pagesProdutos/megaHair/mH2.html')
}
mH3.onclick = e => {
    ajax(e, '../pagesProdutos/megaHair/mH3.html')
}
mH4.onclick = e => {
    ajax(e, '../pagesProdutos/megaHair/mH4.html')
}
mH5.onclick = e => {
    ajax(e, '../pagesProdutos/megaHair/mH5.html')
}
mH6.onclick = e => {
    ajax(e, '../pagesProdutos/megaHair/mH6.html')
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

atacado.forEach(e => {
    e.onclick = a => {
        a.preventDefault()

        fetch('../pages/cabeloAtacado.html')
            .then(resp => resp.text())
            .then(page => main.innerHTML = page)

        clearInterval(interval)

        window.scroll(0, 0)
    }
})