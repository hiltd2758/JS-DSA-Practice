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

let input = ("{[]]]}")
function leetcode20(input) {
    let stack = [];
    let hashMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (let i = 0; i < input.length; i++) {
        let char = input[i]; // giá trị đại diện cho đối tượng đang xét
        if (hashMap[char] === undefined) {
            stack.push(char);
        }
        else {
            if (stack.length === 0) return false
            if (stack[stack.length - 1] !== hashMap[char])
                return false
            stack.pop()
        }
    }
    return stack.length === 0;
}
console.log(leetcode20(input));