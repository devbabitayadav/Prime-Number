
const number = parseInt(prompt("Enter a positive number: "));

let isPrime = true;

if (number === 1) {
    document.write("1 is neither prime nor composite number.");
}


else if (number > 1) {

 
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false; 4
            break;
        }
    }

    if (isPrime) {
        document.write(`${number}is a prime number`);
    } else {
       document.write(`${number} is a not prime number`);
    }
}

