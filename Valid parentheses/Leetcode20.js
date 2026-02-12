// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
let s = "([])";
function isValid(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    //using simple for loop 
    // for (let i = 0; i < s.length; i++) {
    //     let char = s[i];
    //     if (map[char]) {
    //         stack.push(char);
    //     }
    //     else {
    //         let last = stack.pop();
    //         if (map[last] !== char) {
    //             return false;
    //         }
    //     }
    // }
    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            let last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
        
    }
    return stack.length === 0;
}
console.log(isValid(s)); // true -> "([])"
