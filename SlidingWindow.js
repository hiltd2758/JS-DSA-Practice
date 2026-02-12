
// Cho mảng số nguyên và số K, hãy tìm độ dài lớn nhất của dãy con liên tiếp có tổng không vượt quá K.

// Given an integer array and an integer K, find the maximum length of a contiguous subarray whose sum does not exceed K.
let arr = [1,2,3,4,2,3,1];
let K = 5;

function SlidingWindow(arr, K)
{
    let left = 0;
    let sum = 0;
    let maxLen = 0;

    for(let right =0; right < arr.length ; right++)
    {
        sum += arr[right];

        while(sum>K)
        {
            sum -= arr[left];
            left++;
        }
        let curLen = right -left +1;

        if(curLen >= maxLen)
        {
            maxLen = curLen;
        }
    }
    return maxLen;
}

console.log(SlidingWindow(arr, K));

//two pointers with sliding window
