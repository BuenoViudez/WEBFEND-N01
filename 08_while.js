let num1 = 20;
let num2 = 30;

while (num1 <= 10) {
    console.log(num1);
    num1++;
}

do {
    console.log(num2);
    num2++
}while (num2 <= 10)

let senha = "1234"

do {
    console.log("Digite a senha");
} while (senha != "1234");

let num3 = 0;

while (num3 <= 10){
    if (num3 % 2 == 0){
        console.log(`É par ${num3}`);
    }else {
        console.log(`É impar ${num3}`);
    }
    num3++;
}

console.log("FIM !!!");
