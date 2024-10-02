const valorBitcoin =3000
let eurosValores = [50, 100, 150]

function eurosParaSatoshis (euros, valorBitcoin) {
    let satoshis = (euros/valorBitcoin)*100000000
    return satoshis
}

let euros = 0
let satoshis = 0

for (let i = 0; i < eurosValores.length; i++) {
    let euros = eurosValores[i]
    let satoshis = eurosParaSatoshis (euros, valorBitcoin)
    console.log(euros + " euros = " + satoshis + " satoshis" );
}


console.log(euros + "ultimo euros = " + satoshis + " satoshis" )