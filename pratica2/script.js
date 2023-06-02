function verificar() {


    var data = new Date()
    var ano = data.getFullYear()
    var ponto = document.getElementById(`txtano`)
    var fAno = Number(ponto.value)
    var res = window.document.querySelector('div#dois')


    if (fAno == 0 || fAno > ano) {
        window.alert(`Dados incorretos! Tente novamente.`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - fAno
        var genero = ''
        if (fsex[0].checked) {
            var genero = 'masculino'

            if (idade < 13) {
                res.innerHTML = `criança de ${idade} anos do sexo  ${genero}.`
                res.innerHTML += `<img src="fotos/meninocrianca.jpg">`
            } else if (idade < 18) {
                res.innerHTML = `Jovem de ${idade} anos do sexo  ${genero}.`
                res.innerHTML += `<img src="fotos/homemjovem.jpg">`
            } else if (idade < 60) {
                res.innerHTML = `Adulto de ${idade} anos do sexo  ${genero}.`
                res.innerHTML += `<img src="fotos/homemadulto.jpg">`
            } else {
                res.innerHTML = `Idoso de ${idade} anos do sexo  ${genero}.`
                res.innerHTML += `<img src="fotos/homemvelho.jpg">`
            }


        } else {
            var genero = 'Feminino'
            if (idade < 13) {
                res.innerHTML = `criança de ${idade} anos do sexo  ${genero}.`
                res.innerHTML += `<img src="fotos/mulhercrianca.jpg">`
                
            } else if (idade < 18) {
                res.innerHTML = `Jovem de ${idade} anos do sexo  ${genero}.`
                res.innerHTML += `<img src="fotos/mulherjovem.jpg">`
            } else if (idade < 60) {
                res.innerHTML = `Adulto de ${idade} anos do sexo  ${genero}.`
                res.innerHTML += `<img src="fotos/mulheradulta.jpg">`
            } else {
                res.innerHTML = `Idosa de ${idade} anos do sexo  ${genero}.`
                
            }

        }
    }
}

