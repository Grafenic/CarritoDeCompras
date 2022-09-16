
let presupuesto = parseFloat(prompt("Ingresar dinero disponible para la compra"))
//Evitar que recargue la pagina
function noRecargar(e) {
    e.preventDefault();
}
//Funcion de Impuesto IVA

const IVA = 1.21

function precioConIva(i) {
    return i * IVA   
}

//Funcion constructora de productos

const genCodigoBarras = ()=> parseInt(Math.random()*1000000)

function Producto(nombre, precio, codigoBarras) {
    this.nombre = nombre
    this.precio = precio
    this.Codigo_De_Barras = codigoBarras
}

//Lista de productos vacia

const productos = [];

//carga de productos al carrito
alert("A continuacion podrá cargar los productos a su carrito, siga los pasos atentamente")
do {
    let nombreProducto = prompt("Ingresar nombre del producto:")
    let precioProducto = parseFloat(prompt("Ingresar precio del producto:"))
    let codigoBarras = genCodigoBarras()
    productos.push(new Producto(nombreProducto , precioProducto, codigoBarras))
    continuarCompra = confirm("desea seguir cargando productos al carrito?")
} while (continuarCompra);

// Suma del total

const totalIva = productos.reduce((i,el)=> i + el.precio,0);
const totalCompra = precioConIva(parseFloat(totalIva));
let sobrantePresupuesto =  presupuesto - totalCompra;

//Se comprueba si el presupuesto es Mayor o igual al total a pagar
if (totalCompra <= presupuesto) {
    alert("el total de tu compra con el IVA del 21% es: $"+totalCompra.toFixed(2)+" por ende, te sobran: $"+sobrantePresupuesto.toFixed(2));
} else {
    alert("No te alcanza el presupuesto para realizar el pago ya que el total con el IVA de 21% es de: $"+totalCompra+". Tendrá la oportunidad de actualizar el presupuesto para llegar al monto necesario para la compra");
    do {
        presupuesto = parseFloat(prompt("Ingresar presupuesto total para la compra, Recordá que el monto total es de: $"+totalCompra))
        seguir = confirm("Desea Confirmar el presupuesto? si apreta en cancelar podrá corregir el monto")
    } while (seguir != true);
    if (totalCompra <= presupuesto) {
        sobrantePresupuesto =  presupuesto - totalCompra;
        alert("el total de tu compra es: $"+totalCompra.toFixed(2)+" por ende, te sobran: $"+sobrantePresupuesto.toFixed(2))
    } else {
        alert("Lo sentimos, pero nuevamente tu presupuesto es insuficiente")
    }
}
alert("Gracias por habernos elegido")
if (totalCompra <= presupuesto){
    alert("Tu ticket es el siguiente (apreta F12 despues de aceptar)")
    console.table(productos);
    console.log("Tu total fue de: $"+totalCompra.toFixed(2));
    console.log("Te sobraron $"+sobrantePresupuesto.toFixed(2));
}

//Eventos en el Dom
let ticketEvento = document.querySelector("#ticketEvento")

let cliente = document.querySelector("#cliente")
let formulario = document.querySelector("#formulario")
formulario.addEventListener("submit",noRecargar)
let nombre = ""
cliente.addEventListener("change", ()=> {
    ticketEvento.innerHTML = "";
    nombre = cliente.value;
    ticketEvento.innerHTML= `<p>Tu nombre: ${nombre}</p>
    <p>Tu presupuesto fue de: $ ${presupuesto}</p> 
    <p>tu vuelto es de: $${sobrantePresupuesto}</p> `
});