function verificar() {

    
    var data = new Date()
    var ano = data.getFullYear()
   var erro = document.getElementById(`txtano`)
   var fAno = Number(erro.value)
   var res = window.document.querySelector('div#dois')
   
    
   if (fAno == 0 || fAno > ano ) {
    window.alert(`deu errado`)
   }else{
            var sex = document.getElementsByName(`radsex`)[1]
            var idade = ano - fAno
            if () {
                
            } else {
                
            }
    res.innerHTML = `criança de ${idade} anos do sexo .`
            
        }  
    }
    
