function oneThroughTwenty(){

    let numeros = []

    for(let i = 1 ; i<=20;i++){
        numeros.push(i)
    }

 return numeros

}


function evensToTwenty(){

    let numerosPares = [] 

    for(let i = 2; i <= 20; i +=2 ){
        numerosPares.push(i)
    }
    return numerosPares

}


function oddsToTwenty(){

    let numerosImpares = [] 

    for(let i = 1; i <= 20; i +=2 ){
        numerosImpares.push(i)
    }
    return numerosImpares

}

function multiplesOfFive(){

    let numeros = [] 

    for(let i = 5; i <= 100; i += 5 ){
        numeros.push(i)
    }
    return numeros

}


function squareNumbers(){

    let quadradosPerfeitos = [] 
    let i = 1

    while(i**2 <= 100){1

        quadradosPerfeitos.push(i**2)
        i++

    }

    return quadradosPerfeitos
}


function countingBackwards(){
    
let numeros = []

    for(let i = 20; i >= 1; i-- ){

        numeros.push(i)

    }

    return numeros

}

function evenNumbersBackwards(){

    let numerosPares = []

    for(let i = 20; i >= 1; i-=2 ){

        numerosPares.push(i)

    }

    return numerosPares


}

function oddNumbersBackwards (){

    let numerosimpares = []

    for(let i = 19; i >= 1; i-=2 ){

        numerosimpares.push(i)

    }

    return numerosimpares


}

function multiplesOfFiveBackwards  (){

    let numeros = []

    for(let i = 100; i >= 1; i-=5 ){

        numeros.push(i)

    }

    return numeros


}

function squareNumbersBackwards (){

    let quadradosPerfeitos = [] 

    for(let i = 100; i >= 1 ; i-- ){

        if(i**(1/2) % 2 == 0 || i**(1/2) % 2 == 1 ){
            quadradosPerfeitos.push(i)
        } 
        
    }
    
    return quadradosPerfeitos
    
    
}



