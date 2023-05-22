var cnum = window.document.getElementById(`talnum2`)
//var num = Number(cnum.value)
var res = window.document.querySelector('div#dois')
var lista = window.document.querySelector(`select#talnum`)
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n)<=100) {
        
        return true
    }else{
        return false
    }
    
}

function inLista(n, l) {

    if (l.indexOf(Number(n))!= -1) {
        return true
        
    } else {

        return false
        
    }
    
}

function adicionar() {
  
   
 

    if (isNumero(cnum.value) && !inLista(cnum.value, valores)) {
     

       // window.alert(`ok`)

       valores.push(Number(cnum.value))
       var item =document.createElement(`option`)
       item.text = `Valor ${cnum.value}.`
       lista.appendChild(item)
       res.innerHTML =''
      

    } else {

        window.alert(`errou`)
        
    }
 
    cnum.value =``
    cnum.focus()

}

function fimli(){

if (valores.length == 0) {

    window.alert(`adicione valores antes de finalizar!`)
    
} else {
    let tot = valores.length

    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (var pos  in valores) {

        soma+= valores[pos]
        if (valores[pos] > maior) {
            maior = valores[pos]
            
        }

        if (valores[pos]<menor) {
            menor = valores[pos]
            
        }
        media = soma/tot
    }

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot}  números cadatrados.</p>`
    res.innerHTML += `O menor valor informado foi ${menor}<br>`
    res.innerHTML += `O mairo valor informado foi ${maior}<br>`
    res.innerHTML += `A soma de todos foi ${soma}<br>`
    res.innerHTML += `A soma de todos foi ${media}<br>`
}

}