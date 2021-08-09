int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    int *output = malloc(sizeof(int) * *returnSize);
    
    for (int i = 0; i < numsSize - 1; i++) {
        bool flag = false;
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                output[0] = i;
                output[1] = j;
                break;
            }
        }
        if (flag) break;
    } 
    return output;
}
