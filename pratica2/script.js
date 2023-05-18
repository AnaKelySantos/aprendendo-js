function verificar() {

    
    var data = new Date()
    var ano = data.getFullYear()
   var erro = document.getElementById(`txtano`)
   var fAno = Number(erro.value)
   var res = window.document.querySelector('div#dois')
   var idade = ano - fAno
    
   if (idade == ano || idade < 0) {
    window.alert(`deu errado`)
   }else if (idade < 13) {

    res.innerHTML = `criança de ${idade} anos.`
            
        }  else if (idade<19) {
            res.innerHTML = `jovem de ${idade} anos.`
        } else if (idade <= 64) {
            res.innerHTML = `aduto de ${idade} anos.`
            
       } else {

         res.innerHTML = ` senhores de ${idade} anos.`
            
        }
    }
    
