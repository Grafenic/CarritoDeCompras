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
