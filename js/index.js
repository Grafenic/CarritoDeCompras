//Funciones
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

//Registro para luego iniciar sesion

let user = ingresarInfo("ingresar usuario para registrarse:");
let pass = ingresarInfo("ingresar contraseña deseada:");
let edad = parseFloat(ingresarInfo("Ingresar tu edad:")); 


if(edad < 18){
    alerta("no podes acceder, ya que eres menor de edad");
}else{
    let usuario = ingresarInfo("ingresa tu usuario para acceder")
    let contrasena = ingresarInfo("ingresa la contraseña")
        if (user === usuario && pass === contrasena) {
            alerta("Bienvenido "+user+"! Accediste correctamente");
            ingresarCaracteristicas();
        } else {
            alerta("no se reconoce el usuario o contraseña, por favor vuelva a acceder, tiene 2 intentos más");
            for (let i = 1; i >= 0; i--) {
                let usuario = ingresarInfo("ingresa tu usuario para acceder")
                let contrasena = ingresarInfo("ingresa la contraseña")
                if (user === usuario && pass === contrasena){
                    alerta("Bienvenido "+user+"! accediste correctamente");
                    i = 0
                    ingresarCaracteristicas();
                }else{
                    alerta("te quedan "+i+" intento/s")
                }
        }
    }
}
despedida();

//Funcion constructora de Objetos para el array

function Persona(nombre,altura,edad) {
    this.nombre = nombre
    this.altura = altura
    this.edad = edad
}
//Creacion de la lista vacia
let listaPersonasEstaturaEdad = []
//Utilizacion de la funcion constructura al crear objetos "Persona"
const persona1 = new Persona("Maria",169,29)
const persona2 = new Persona("Roberto",156,35)
const persona3 = new Persona("Martin",178,22)
const persona4 = new Persona("Samuel",175,19)
const persona5 = new Persona("Natalia",170,40)
const persona6 = new Persona("Sofia",155,36)
//Push hacia el Array vacio con las Peronas creadas
listaPersonasEstaturaEdad.push(persona1,persona2,persona3,persona4,persona5,persona6)
//Visualizacion de la lista en una tabla para visualizar los datos de cada objeto en cuestion
console.table(listaPersonasEstaturaEdad);
//Se aplica la propiedad Reverse para reordenar la lista
listaPersonasEstaturaEdad.reverse();
//Se vuelve a visualizar el Array
console.table(listaPersonasEstaturaEdad);
//Funcion para modificar los objetos dentro de la lista iterando los mismos y aplicando una suma en la edad de cada persona.
function sumarEdad() {
    listaPersonasEstaturaEdad.forEach((persona)=> {
        persona.edad = persona.edad + 1
    })
}
//Se llama la funcion sumarEdad para aplicarla en el Array
sumarEdad(listaPersonasEstaturaEdad)
//Visualizacion de la lista modificada en la edad
console.table(listaPersonasEstaturaEdad);