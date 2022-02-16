
// Aprendiendo a escuchar un boton
var peso = document.getElementById("peso_input")
var boton = document.getElementById("peso_boton")
boton.addEventListener("click", calculaClick)

function calculaClick(){
    if(peso.value != ""){
        alert("Tu peso es de " + parseInt(peso.value) + " Kg")
    }
}

// Dibujando patrones en canvas
var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d")
var lineas = 300
var cont = 0 
var yi, xf

function dibujaLinea(color, xi, yi, xf, yf){
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xi,yi)
    lienzo.lineTo(xf,yf)
    lienzo.stroke()
    lienzo.closePath()
}

while(cont < lineas){
    yi = 10 * cont
    xf = 10 * (cont+1)
    dibujaLinea("blue", 0, yi,xf,300)
    cont ++
}
cont = 0
while(cont < lineas){
    yi = 10 * cont 
    xf = 10 * (cont + 1)
    dibujaLinea("blue", yi, 0,300,xf)
    cont ++
}

dibujaLinea("black", 1, 1,1,300)
dibujaLinea("black", 1, 300,300,300)
dibujaLinea("black", 1, 1,300,0)
dibujaLinea("black", 300, 1,300,300)