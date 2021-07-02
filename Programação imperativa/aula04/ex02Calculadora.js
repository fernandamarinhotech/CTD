//Aula 04 - 08/06/2021
//ex02calculadora

let somar = function(n1,n2){
    return n1+n2;
}
let subitrair = function(n1,n2){
    return n1-n2;
}
let mutiplicar = function(n1,n2){
    return n1*n2;
}
let dividir = function(n1,n2){
    // olhar para a variavel n2 e verificar se n2 == 0
    if(n2==0){
        //executar se for true
        return 'Impossivelfazer a divisão por 0';
    }else {
        return n1/n2;
    }
}
console.log(dividir(10,2));