
var nombre = "Juan"
var edad = 4
var cont = 0

var concat = nombre + " " + edad


var datos = document.getElementById("datos")

datos.innerHTML = `
<h1>Me llamo ${nombre}</h1>
`
function edadfaltante(){
    for(var i = edad; i < 18; i++){
        cont+=1
        if(i+1 == 18){
            datos.innerHTML += `<h1>Te faltan ${cont} años para ser mayor de edad</h1>`
        }
    }
}
function soymayor(){
    if(edad < 18){
        datos.innerHTML += '<h1>Eres menor de edad</h1>'
        edadfaltante()
    }else{
        datos.innerHTML += '<h1>Eres mayor de edad</h1>'
    }
}

soymayor()

var marcas = ['nike', 'adidas']

for(i =0; i<marcas.length;i++){
    document.write(marcas[i] + '<br/>')
}