function comerPizza() {
    
   
    var texto = window.document.querySelector(`div#dois`)
   
    c = 1
while (c<=6) {
   
      
        texto.innerHTML += `${c}<br>`
        c++
}
}
function comerPizza2() {
    
   
    var texto = window.document.querySelector(`div#dois`)
   
    c = 6
while (c>=1) {
   
      
        texto.innerHTML += `${c}<br>`
        c--
}
}
