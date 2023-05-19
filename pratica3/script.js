function contar() {
    
var num1 = window.document.getElementById(`txtum`)
var num2 = window.document.getElementById(`txtdois`)
var res = window.document.querySelector(`div#dois`)

for ( var c = num1; c >= num2; c++) {
    
res.innerHTML =`Contando: <br>`
res.innerHTML =`${c} `
res.innerHTML =`<img src="/homemjovem.jpg">` 


}
}