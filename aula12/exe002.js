var horaAtual = new Date()
var hora = horaAtual.getHours() 
console.log(`agora são exatamente ${hora} horas.`)

if (hora > 4) {
    console.log(`bom dia`)
    
} else {

    if (hora > 11) {
        console.log(`boa tarde`)
    } else {
        if (hora > 16) {
            console.log(`boa noite`)
            
        } else {
            console.log(`boa madrugada`)
        }
        
    }
    
}
