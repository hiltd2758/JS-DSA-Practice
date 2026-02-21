export function fibo(n) {

    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibo(9));



export function fiboO(n) {

    if (n === 0) return [0];
    if (n === 1) return [0, 1];


    let a = 0;
    let b = 1;
    let fibStack = [0, 1];
    for (let i = 2; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;

        fibStack.push(c);
    }
    return fibStack;
}

console.log(fiboO(9));
