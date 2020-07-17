function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        //is the number a multiple of 3 & 5?
        if (i % 3 === 0 && i % 5 ===0) {
            console.log('fizzbuzz');
            //is the number a multiple of 3?
        } else if (i % 3 === 0) {
            console.log("fizz");
            //is the number a multiple of 5??
        } else if (i % 5 === 0) {
            console.log("buzz")
            //everything else
        } else {
            console.log(i);
        }
    }
    return n;
}

fizzbuzz (15)
fizzbuzz(3)
fizzbuzz(100)