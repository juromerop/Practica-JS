var xi = 150, yi = 150, xf = 150, yf = 150
document.addEventListener("keyup", dibujar)

var d = document.getElementById("areaDibujo")
var lienzo = d.getContext("2d")

function dibujar(evento){
    if (evento.key == "ArrowUp"){
        yf-=10
        dibujaLinea("black", xi, yi, xf, yf)
        yi-=10
    }
    if (evento.key == "ArrowDown"){
        yf+=10
        dibujaLinea("black", xi, yi, xf, yf)
        yi+=10
    }
    if (evento.key == "ArrowLeft"){
        xf-=10
        dibujaLinea("black", xi, yi, xf, yf)
        xi-=10
    }
    if (evento.key == "ArrowRight"){
        xf+=10
        dibujaLinea("black", xi, yi, xf, yf)
        xi+=10
    }
}

function dibujaLinea(color, xi, yi, xf, yf){
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xi,yi)
    lienzo.lineTo(xf,yf)
    lienzo.stroke()
    lienzo.closePath()
}