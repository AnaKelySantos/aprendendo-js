function carregar() {
    var texto = window.document.getElementById('um')
    var img = window.document.getElementById('dois')
    var data = new Date()
    var hora = data.getHours()

    texto.innerHTML = `Agora são ${hora} horas.`
    if (hora>4 && hora<12) {
        texto.innerHTML += ` Bom dia!`
        texto.innerHTML += `<img src="exercicio/fotor_2023-5-18_11_49_53-removebg-preview.png" alt="foto do dia">`
        document.body.style.background = '#c8a2c8'
    } else {
        if (hora<18) {
            texto.innerHTML += ` Boa tarde!`
        texto.innerHTML += `<img src="exercicio/fotor_2023-5-18_11_51_30-removebg-preview.png">`
        document.body.style.background = '#f08080'
        } else {
            
            texto.innerHTML += ` Boa noite!`
        texto.innerHTML += `<img src="exercicio/fotor_2023-5-18_11_52_27-removebg-preview.png">`
        document.body.style.background = '#c8a2c8'
            
        }
        
    }

    
}