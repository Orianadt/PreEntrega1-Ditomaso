//Simulador login
let verdad = true
let nombre = prompt("Ingrese su nombre y apellido");
while   (verdad)    {
    if (nombre != "") {
        verdad = false
    ("Bienvenidx" + nombre);
    }  else {
        nombre  =   prompt ("Ingrese su nombre y apellido");
    }
}
//simulador ecommerce
let producto = prompt  ("Productos a la venta: \n 1-Buzo color rosa $15000 \n 2-Jean boyfriend $20000 \n 3- Remera blanca $6000 \n ESC para salir \n Ingrese el numero del producto que desea ingresar al carrito: ")
    switch  (producto) {
        case "Buzo color rosa":
            console.log("Agregaste al carrito buzo color rosa");
            break
        case "Jean boyfriend":
            console.log("Agregaste al carrito jean boyfriend");
            break
        case "Remera blanca":
            console.log("Agregaste al carrito remera blanca");
            break
        default 
        alert ("no tenemos ese producto");
        break
    }
//funcion para simular pago en cuotas
function PagoEncuotas(){
    let valorProducto = Number (prompt ("Ingrese el monto a pagar"));
    while (trueOFalse) {
        if (valorProducto === 0) {
            valorProducto = Number (prompt ("Ingrese el monto a pagar"))
        } else{
            CalcularCuotas (resultado);
        }
    }
}


function CalcularCuotas(resultado) {
    let cuotas = Number (prompt ("Ingresa la cantidad de cuotas \n 1 \n 3 \n6"));

    while (trueOFalse) {
        let resultadoFinal = 0;
        switch (cuotas) {
            case 1:
                resultadoFinal = valorProducto / cuotas;
                alert("El monto de la cuota es de ${Resultado final}$");
                trueOFalse = false;
                break;
            case 3:
                resultadoFinal = valorProducto / cuotas;
                alert("El monto de la cuota es de ${Resultado final}$");
                trueOFalse = false;
                break;
            case 6:
                    resultadoFinal = valorProducto / cuotas;
                    alert("El monto de la cuota es de ${Resultado final}$");
                    trueOFalse = false;
                    break;    
            default:
            cuotas = Number (prompt ("Ingresa la cantidad de cuotas \n 1 \n 3 \n6"));
            break
        }
    }
}

PagoEnCuotas ()