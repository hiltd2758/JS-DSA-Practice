// Tiếng Việt:
// Cho chuỗi ký tự và số K, hãy tìm độ dài lớn nhất của chuỗi con liên tiếp chứa không quá K ký tự khác nhau.

// English:
// Given a string and an integer K, find the length of the longest substring that contains at most K distinct characters.
let str = "eceba";
let K = 2;
function SlidingWindowChar(str, K)
{
    let left = 0;
    let charCount = new Map();
    let maxLen = 0; 
    for(let right =0; right < str.length ; right++)
    {
        let rightChar = str[right];
        charCount.set(rightChar, (charCount.get(rightChar) || 0) + 1);
        while(charCount.size > K)
        {
            let leftChar = str[left];
            charCount.set(leftChar, charCount.get(leftChar) - 1);
            if(charCount.get(leftChar) === 0)
            {
                charCount.delete(leftChar);
            }
            left++;
        }
        let curLen = right - left + 1;
        if(curLen > maxLen)
        {
            maxLen = curLen;
        }
    }
    return maxLen;
}

console.log(SlidingWindowChar(str, K)); //3 -> "ece""ece"

//two pointers with sliding window