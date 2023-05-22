function tabuada() {
var cnum  = window.document.getElementById(`txtnum`)
var seltab = window.document.getElementById(`seltab`)
var num = Number(cnum.value)


var res = window.document.querySelector(`div#dois`)
var resu = window.document.querySelector(`div#resu`)

seltab.innerHTML = ''
for (var c = 0; c < 11; c++) {
    
            
           
        
var igua = num * c
//res.innerHTML += `${num} x ${c} = ${igua}`
    
    var item = document.createElement('option')
    item.text =` ${num} x ${c} = ${igua}`
    seltab.appendChild(item)
}

    
}