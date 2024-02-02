function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#FF9F3E'
    }else if (hora >=12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#E49479'
    }else{
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#322944'
    }
}