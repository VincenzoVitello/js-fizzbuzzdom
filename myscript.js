let scatola = document.getElementById ('container'); //creo una variabile con potrò richiamare il mio container
//scatola.innerHTML += '<div class="box">' + number + '</div>';

for (let number = 1; number <= 100; number++) { //creato ciclo for con variabile denominata number pari a 1, con incremento di ++ (+1) fino al raggiungimento di 100
    if(number % 3 == 0 && number % 5 == 0){
        scatola.innerHTML += '<div class="box fizzbuzz">' + 'FizzBuzz' + '</div>' //if basato sui multipli sia di 3 che di 5
    }else if (number % 3 == 0){
        scatola.innerHTML += '<div class="box fizz">' + 'Fizz' + '</div>' //else if basato sui multipli di 3
    }else if(number % 5 == 0){
        scatola.innerHTML += '<div class="box buzz">' + 'Buzz' + '</div>' //else if basato sui multipli di 5
    }else{
        scatola.innerHTML += '<div class="box">' + number + '</div>' //altrimenti mostrare semplicemente il numero
    }
    console.log('incremento di:', number); 
}


