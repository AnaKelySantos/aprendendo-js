function contar() {
    
var num1 = window.document.getElementById(`txtum`)
var um = Number(num1.value)
var num2 = window.document.getElementById(`txtdois`)
var dois = Number(num2.value)
var res = window.document.querySelector(`div#dois`)
res.innerHTML =`Contando: <br>`

for ( var c = um; c <= dois; c++) {

    
    

res.innerHTML +=`${c} <img src="icones/direita.png">` 



}
res.innerHTML +=` <img src="icones/bandeira.png">` 

}