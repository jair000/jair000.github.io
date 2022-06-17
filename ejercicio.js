
window.addEventListener("load",() =>{
    const botones = document.getElementsByClassName("boton")
    const result = document.querySelector(".resultado")

    const botonlista = Array.from(botones)

    botonlista.forEach((boton) =>{
        boton.addEventListener("click", () =>{
            calculadora(boton, result)
        })
    })
})

function calculadora(boton,result){
    switch (boton.innerHTML) {
        case "C":
            borrar(result)
            break;

        case "=":
            calcular(result)
            break;
    
        default:
            actualizar(result,boton)
            break;
    }
}

function calcular(result){
    result.innerHTML = eval(result.innerHTML)
}

function borrar(result){
    if(result.innerHTML !=0){
        result.innerHTML = 0
    }
}

function actualizar(result,boton){
    if(result.innerHTML == 0){
        result.innerHTML = " "
    }

    result.innerHTML += boton.innerHTML
}


