let ecran = document.getElementById('ecran')

function appuitouche(num) {
    ecran.innerHTML += num
}
function appuisymbole(sym) {
    let pExiste = ecran.innerHTML.indexOf('+')
    let mExiste = ecran.innerHTML.indexOf('-')
    let fExiste = ecran.innerHTML.indexOf('*')
    let dExiste = ecran.innerHTML.indexOf('/')

    if (pExiste == -1 && mExiste == -1 && fExiste == -1 && dExiste == -1) {
        ecran.innerHTML += sym
    }
}
function appuiclear() {
    ecran.innerHTML = ""
}
function egal() {
    let pExiste = ecran.innerHTML.indexOf('+')
    let mExiste = ecran.innerHTML.indexOf('-')
    let fExiste = ecran.innerHTML.indexOf('*')
    let dExiste = ecran.innerHTML.indexOf('/')

    if (pExiste > -1) {
        let nombres = ecran.innerHTML.split('+')
        ecran.innerHTML = (+nombres[0]) + (+nombres[1])
    }
    else {
        if (mExiste > -1) {
            let nombres = ecran.innerHTML.split('-')
            ecran.innerHTML = (+nombres[0]) - (+nombres[1])
        }
        else {
            if (fExiste > -1) {
                let nombres = ecran.innerHTML.split('*')
                ecran.innerHTML = (+nombres[0]) * (+nombres[1])
            }
            else {
                if (dExiste > -1) {
                    let nombres = ecran.innerHTML.split('/')
                    ecran.innerHTML = (+nombres[0]) / (+nombres[1])
                }
            }
        }
    }
}