function ingresarInfo(mensaje){
    return prompt(mensaje)
}
function alerta(mensaje){
    return alert(mensaje)
}

function ingresarCaracteristicas() {
    let altura = parseFloat(ingresarInfo("Ingresa tu altura en centímetros (solo numeros):"));
    let sexo = ingresarInfo("ingresa tu sexo M ó F");
    promedioAltura(sexo,altura)
}

function promedioAltura(sexo,altura) {
    switch (sexo) {
        case "M":
            if (altura<173) {
                alerta("Tu altura está por debajo del promedio de Sudamerica")
            } else {
                alerta("Tu altura está por encima del promedio de Sudamerica")
            }
            break;
        case "F":
            if (altura<160) {
                alerta("Tu altura está por debajo del promedio de Sudamerica")
            } else {
                alerta("Tu altura está por encima del promedio de Sudamerica")
            }
            break;
        default:
            alerta("no ingresaste el sexo, recargue la pagina para volver a intentarlo")
            break;
    }
}
    
function despedida() {
    alerta(user+"!"+" Esperamos que hayas encontrado lo que buscabas")
}