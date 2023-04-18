const contentitore = document.getElementById("container");

for (let numero = 1; numero <= 100; numero++) {

    let messaggio = numero;
    let classe = "";

    if(numero % 3 == 0 && numero % 5 ==  0) {
        messaggio = "FizzBuzz"
        classe = "fizzbuzz"
    } else if (numero % 3 ==  0) {
        messaggio = "Fizz"
        classe = "fizz"
    } else if (numero % 5 == 0){
        messaggio = "Buzz"
        classe = "buzz"
    }

    contentitore.innerHTML += `<div class="box ${classe}">${messaggio}</div>`;

    console.log(messaggio)

}
