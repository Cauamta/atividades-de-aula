// 1. soma de dois números

let a = 5, b = 7;

let soma = a + b;

console.log('a soma de '+ a + ' com ' + b + ' é igual a :'+ soma);
// 2. verificar se o numero é par ou impar 
let numero = 10;

if ( numero % 2 === 0){
    console.log(numero, 'é par');
} else {
console.log(numero, 'é impar')
}





// 3. imprimir numeros de 1 a 10
for (let i = 1; i <= 10; i++ ){
    console.log(i);
}

// 4. calcular media de notas
let notas = [8, 7, 6, 8.5,], 
somaNotas = 0;

for(let i = 0; i < notas.length; i++){
    somaNotas += notas[i];
}

let mediaFinal = somaNotas / notas.length;
console.log('a media final e igual a: ',mediaFinal);
//.5 maior numero em lista de vetor(array)
let numeros = [12, 5, 8, 21, 7, 45, 38, 19],
    maiorNumero = 0;

    for (let i = 0; i < numeros.length; i++){
        if(numeros[i]> maiorNumero) {
            maiorNumero = numeros[i];
        }
        
    }
    console.log('o maior numero da lista é ',maiorNumero);

    // 6.contar quantas vezes um determinado valor aparece no vetor
    let valores = [3, 5, 2, 6, 8, 5, 3],
     alvo = 3,
     contador = 0;
     // interando em cada valor
     for (let i = 0; i < valores.length; i++){
        if (valores[i] === alvo){
            contador++;
        }
     }
     console.log('o valor', alvo, 'aparece', contador, 'vezes na lista.');

     // 7. vamos agora inverter os valores de um vetor
     let lista = [ 1, 2, 3, 4, 5],
        listaInvertida = [];
        //interando  cada um dos elementos
        for (let i = lista.length - 1; i >= 0; i--){
            listaInvertida.push(lista[i]);
        }
        console.log('lsita original:', lista);
        console.log('lsita invertida:', listaInvertida);

        // 8. ordenaçao simples
        let listaOrdenada= [5, 3, 8, 4, 2, 9, 1, 17, 6, 7];
        for (let i = 0; i < listaOrdenada.length; i++){
            for (let j = 0; j < listaOrdenada.length -1; j++){
                let temp = listaOrdenada[j];
                listaOrdenada[j] = listaOrdenada[j+1];
                listaOrdenada[j + 1] = temp;
            }
        }
console.log('Lista.ordenada:',listaOrdenada);

        