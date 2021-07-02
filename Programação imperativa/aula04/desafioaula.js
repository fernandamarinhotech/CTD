function podeSubir(altura, acompanhada){
    if(altura >=140 && altura < 200){
        return 'Pode subir'

    }
    else if(altura <= 140 && altura>= 120 && acompanhada){
        return 'acesso liberado'
    }
    else{
        return 'Acesso negado'
    }
}

console.log(podeSubir(139, false))