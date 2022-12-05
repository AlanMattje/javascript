function calculo_prestamo (monto,cuota){
    monto= parseFloat(monto);

let prestamo = 0;

if(monto >0 && cuota == 1){
    prestamo= monto * 1.05
    return prestamo
}
else if(monto >0 && cuota == 2){
    prestamo= monto * 1.10
    return prestamo
}
else if(monto >0 && cuota == 3){
    prestamo= monto * 1.15
    return prestamo
}
else if(monto >0 && cuota == 4){
    prestamo= monto * 1.20
    return prestamo
}
else if(monto >0 && cuota == 5){
    prestamo= monto * 1.25
    return prestamo
}
else if(monto >0 && cuota == 6){
    prestamo= monto * 1.30
    return prestamo
}
else if(monto >0 && cuota == 7){
    prestamo= monto * 1.35
    return prestamo
}
else if(monto >0 && cuota == 8){
    prestamo= monto * 1.40
    return prestamo
}
else if(monto >0 && cuota == 9){
    prestamo= monto * 1.45
    return prestamo
}
else if(monto >0 && cuota == 10){
    prestamo= monto * 1.50
    return prestamo
}
else if(monto >0 && cuota == 11){
    prestamo= monto * 1.55
    return prestamo
}
else if(monto >0 && cuota == 12){
    prestamo= monto * 1.60
    return prestamo
}
}
let monto = "";

console.log("Calcular prestamo")

while(monto != "fin"){
    monto= prompt ("ingrese el monto que desea o ingrese fin para salir")
    if (monto == "fin")
    console.log ("Gracias por utilizar el cotizador");
    else if (monto == 0)
    console.log("Imposible cotizar $0");
    else {
    let cuota = prompt ("Ingrese la cantidad de cuotas de 1 a 12");
    if (cuota > 12 || cuota == 0)
    console.log ("No se puede calcular en mas de 12 cuotas o en 0");
    else {
    let total = calculo_prestamo(monto,cuota);
    console.log("Solicitaste: ", monto);
    console.log("En cuotas: ", cuota);
    console.log("Monto total a devolver: ",total)
} 
}
}
