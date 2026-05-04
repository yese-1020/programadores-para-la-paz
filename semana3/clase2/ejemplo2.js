const fuente = "confiable";
let informacionverificada = true;
if (fuente == "confiable") {
    console.log("la informacion puede compartirse");
} else {
    console.log("la informacion no puede compartirse");
}
let color_cielo ="rojo";

if (color_cielo=== "rojo") {
console.log("el cielo es rojo");
} else {
    console.log("el cielo no es rojo");
}




function esmayordeedad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

if (esmayordeedad(5)) {
    console.log("la persona es mayor de edad");
} else {
    console.log("la persona no es mayor de edad");
}function ladrar() {
    console.log("guau");
}

function maullar() {
    console.log("miau");
}


ladrar();
maullar();
ladrar();
ladrar();
maullar();
let resultado = esmayordeedad(1);
console.log("¿es mayor de edad? " + resultado);
