// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// 1) vét cạn brute force approach
let input = [2, 7, 11, 15] //length = 4
let target = 9;
//output = [0,1]
function leetcode1(input, target) {
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] + input[j] === target) {
                return [input[i], input[j]]
            }
        }
    }
    return []
}
//2)Hashmap
function leetcode1(arr, target) {
    const map = {}; //key: number, value: index
    for (let i = 0; i < arr.length; i++) {
        const need = target - arr[i];
        //check trước
        if (map[need] !== undefined) {
            return [map[need], i];
        }
        //add sau
        map[arr[i]] = i;
    }
    return [];
}
console.log(leetcode1(input, target))
