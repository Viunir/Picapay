function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas! isso é hora de acordar?`

        if(hora > 4 && hora < 12){
            img.src =  'images/mm.png'
            document.body.style.background = 'gray'
        }else if(hora >= 12 && hora < 18){
            img.src = 'images/m.png'
            document.body.style.background = '#D96941'
        }else{ 
            img.src = 'images/c1.jpg'
            document.body.style.background = '#142426'
        }
    
}
