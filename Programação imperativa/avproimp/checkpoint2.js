// CHECK POINT 2 02/07/2021
// funções, switch case, if 

function usarMicroondas (prato, tempo) {

    function pipoca(tempo){
        if(tempo >=11 && tempo < 20){
            return 'A comida queimou'
        }
        else if(tempo <=9){
            return 'tempo insuficiente'
        
        }
    
        else if(tempo >=20 && tempo>= 30){
            return 'Kabumm'
        }
        else{
            return 'Prato pronto, bom apetite!!'
        }
    }
    
    function macarrao(tempo){
        if(tempo >=9 && tempo < 16){
            return 'A comida queimou'
        }
        else if(tempo <=7){
            return 'tempo insuficiente'
        
        }
    
        else if(tempo >=16 && tempo>= 24){
            return 'Kabumm'
        }
        else{
            return 'Prato pronto, bom apetite!!'
        }
    }
    
    
    function carne(tempo){
        if(tempo >=16 && tempo < 30){
            return 'A comida queimou'
        }
        else if(tempo <=14){
            return 'tempo insuficiente'
        
        }
    
        else if(tempo >=30 && tempo>= 45){
            return 'Kabumm'
        }
        else{
            return 'Prato pronto, bom apetite!!'
        }
    }
    
    function feijao(tempo){
        if(tempo >=13 && tempo < 24){
            return 'A comida queimou'
        }
        else if(tempo <=11){
            return 'tempo insuficiente'
        
        }
    
        else if(tempo >=24 && tempo>= 45){
            return 'Kabumm'
        }
        else{
            return 'Prato pronto, bom apetite!!'
        }
    }
    
    function brigadeiro(tempo){
        if(tempo >=9 && tempo < 16){
            return 'A comida queimou'
        }
        else if(tempo <=7){
            return 'tempo insuficiente'
        
        }
    
        else if(tempo >=16 && tempo>= 24){
            return 'Kabumm'
        }
        else{
            return 'Prato pronto, bom apetite!!'
        }
    }
    switch (prato){
        case 'pipoca':
            return pipoca (tempo)
        case 'macarrao':
            return macarrao (tempo)
        case 'carne':
            return carne (tempo)
        case 'feijao':
            return feijao (tempo)
        case 'brigadeiro': 
            return brigadeiro (tempo)

        default: 
        return'Prato inexistente'
    }

}



console.log(usarMicroondas("pipoca", 10))
console.log(usarMicroondas("macarrao", 10))
console.log(usarMicroondas("carne", 10))
console.log(usarMicroondas("feijao", 10))
console.log(usarMicroondas("brigadeiro", 10))
console.log(usarMicroondas("frango", 10))






