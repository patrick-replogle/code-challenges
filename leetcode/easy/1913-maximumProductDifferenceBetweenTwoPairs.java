// first pass solution
class Solution {
    public int maxProductDifference(int[] nums) {
        Arrays.sort(nums);
        
        return (nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1]);
    }
}

// second pass solution
class Solution {
    public int maxProductDifference(int[] nums) {
        int largest = 0;
        int secondLargest = 0;
        int smallest = Integer.MAX_VALUE;
        int secondSmallest = Integer.MAX_VALUE;
        
        for (int num : nums) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            }
            else if (num > secondLargest) {
                secondLargest = num;
            }
            if (num < smallest) {
                secondSmallest = smallest;
                smallest = num;
            } 
            else if (num < secondSmallest) {
                secondSmallest = num;
            }
        }
        return (largest * secondLargest) - (smallest * secondSmallest);
    }
}
