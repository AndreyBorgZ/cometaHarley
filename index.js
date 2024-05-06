function solucao(senhaDigitada) {
let prox = 1;
let consec = 0;

if (senhaDigitada.length < 8){
    console.log("INVALIDA");
    return;
}
for (let i = 0; i < senhaDigitada.length; i++){
    let numero = senhaDigitada[i] + 1;
    if (consec === 2){
        console.log("INVALIDA");
        return;
    } else if (numero === senhaDigitada[prox]){
        prox++
        consec++;
        } else {
            consec = 0;
            prox++;
        }
        } 
    
    console.log("VALIDA")
}
