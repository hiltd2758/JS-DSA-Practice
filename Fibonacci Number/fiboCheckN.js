export function fiboO(n) {
    if (n === 0 || n === 1) return true

    let a = 0
    let b = 1
    let fibStack = [0, 1]

    while (true) {
        let c = a + b

        a = b
        b = c
        if (c === n) {
            fibStack.push(c)
            return true
        }
        fibStack.push(c)
        if (n > c) {
            return false
        }
    }

}

console.log(fiboO(10));


export function fiboCondition(n) {
    if (n === 0 || n === 1) return true

    let a = 0
    let b = 1
    let fibStack = [0, 1]

    while (b <= n) {
        let c = a + b
        fibStack.push(c)

        if (c === n) {
            return true
        }
        a = b
        b = c
    }

    console.log(fibStack)
    return false
}
console.log(fiboCondition(10));
