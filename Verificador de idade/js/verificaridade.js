function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
        img.setAttribute('id', 'foto')


    if(fano.value.length == 0 || Number(fano.value) < 0 || Number(fano.value) > ano) {
        alert('Fez merda aí patrão! tenta de novo.')
    }else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            if(idade > 130){
                res.innerText = `Para de gracinha e bota a data direito irmão`
                img.setAttribute('src', 'images/')
                res.appendChild(img)
            }else{
            if (fsex[0].checked) {
                gênero =  'Homão'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src', 'images/Nego.jpg')
                } else if(idade > 10 && idade <= 20){
                    img.setAttribute('src', 'images/terry.jpg')
                }else if(idade > 20 && idade < 55){
                    img.setAttribute('src', 'images/zoi.png')
                }
                else if (idade >= 55 && idade < 130){
                    img.setAttribute('src', 'images/vei.jpg')
                }
            }else if (fsex[1].checked){
                gênero =  'Mulé'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src', 'images/santa.jpg')
                }else if(idade > 10 && idade <= 20){
                    img.setAttribute('src', 'images/e.jpg')
                }else if(idade > 20 && idade < 55){
                    img.setAttribute('src', 'images/mk.jpg')
                }
                else if (idade >= 55 && idade < 130){
                    img.setAttribute('src', 'images/g.jpg')
                }
            
            }else if (fsex[2].checked){
                gênero =  'Dinossauro'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src', 'images/d.png')
                }else if(idade > 10 && idade <= 20){
                    img.setAttribute('src', 'images/b.jpg')
                }else if(idade > 20 && idade < 55){
                    img.setAttribute('src', 'images/b3.jpg')
                }else{
                    img.setAttribute('src', 'images/bp.png')
                }
            }
            res.innerText = `${gênero} com ${idade} anos.`
            res.appendChild(img)
        }
    }
}