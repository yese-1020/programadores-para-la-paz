function evaluarpropuestacomunitaria(tienelenguajeclaro, pidesolodatosnecesarios) {
    if (tienelenguajeclaro === true && pidesolodatosnecesarios === true) {
return "la propuesta esta lista para ser compartida con la comunidad."
    } else {
        return "la propuesta debe ajustarse antes de publicarse."
    }
}

const resultado = evaluarpropuestacomunitaria(true, false)

console.log("evaluacion de propuesta comunitaria:")
console.log(resultado)