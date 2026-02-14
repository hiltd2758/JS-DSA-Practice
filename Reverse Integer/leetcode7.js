// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

//giải thích ngắn gọn , trọng tâm
function leetcode7(x) {
    let isPositive = x >= 0;

    x = Math.abs(x)
        .toString()//chuyển số thành chuỗi
        .split('')//chuyển chuỗi thành mảng
        .reverse()//chuyển mảng thành chuỗi
        .join('');//chuyển chuỗi thành số

    x = parseInt(x);//chuyển chuỗi thành số
    return isPositive ? x : -x;
}

function leetcode7(x) {
    let sign = x > 0 ? 1 : -1;
    let b = 0
    while (x !== 0) {
        let a = x % 10;
        b = (b * 10) + a;
        x = Math.trunc(x / 10);
    }

    return b * sign;
}

console.log(leetcode7())

