function productExceptSelf(nums, m) {
    let left = new Array(nums.length).fill(1);
    let right = new Array(nums.length).fill(1);
    let sum = 0;
    
    for (let i = 1; i < nums.length; i++) {
        left[i] = (left[i-1] * nums[i-1]) % m;
    }
    
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = (nums[i+1] * right[i+1]) % m;
    }
    
    for (let i = 0; i < nums.length; i++) {
        sum += left[i] * right[i];
    }
    return sum % m;
}
