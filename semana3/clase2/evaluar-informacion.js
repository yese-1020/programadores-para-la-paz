function evaluarinformacion(tienefuente, estaverificada) {
    if (tienefuente === true && estaverificada === true) {
        return "la informacion puede compartirse con responsabilidad."
        } else {
            return "la infromacion debe revisarse antes de compartirse."
        }
}
    
const resultado = evaluarinformacion(true, false)

console.log("evaluacion de informacion:")
console.log(resultado)
