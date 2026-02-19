let number = 3;


//space: O(n)
function Fibonacci(number) {
    if (number === 0) return 0
    if (number === 1) return 1

    let fib = [0, 1]

    for (let i = 2; i <= number; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[number];

}

console.log(Fibonacci(number));


//space: O(1)
function Fibonacci(number) {
    if (number === 0) return 0
    if (number === 1) return 1

    let prev =0;
    let curr=1;

    for (let i = 2; i <= number; i++) {
        let next = prev + curr ;
        
    }
    return ;

}

