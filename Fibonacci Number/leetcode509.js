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
function FibonacciOptimized(number) {
    if (number === 0) return 0
    if (number === 1) return 1

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= number; i++) {
        let next = prev + curr;
        //next = 1 | num=2

        //next = 2 | num =3
        prev = curr
        //prev = 1

        //prev = 1
        curr = next
        //cur =1

        //cur=2
    }

    return curr;

}

console.log(FibonacciOptimized(4));
