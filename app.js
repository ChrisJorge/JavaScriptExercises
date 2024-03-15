// Count down to 0 from a given number.

for (let n = 20; n > 0; n-- ){
    console.log(n);
}
// Log integers in multiples of 3 as long as they are less than 35.
for (let n = 0; n < 35; n++){
    if(n % 3 === 0){
        console.log(n);
    }
    else{
        continue;
    }
}
// Print integers in multiples of 5 as long as they are less than 100.
for (let n = 0; n < 100; n++){
    if(n % 5 === 0){
        console.log(n);
    }
}
// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.

// All other integers should not be output.

// Print all prime numbers between 0 and 20.