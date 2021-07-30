// first pass solution
class Solution {
    public boolean canBeIncreasing(int[] nums) {  
        for (int i = 0; i < nums.length; i++) {
            boolean flag = true;
            List<Integer> currList = new ArrayList<>();
            Arrays.stream(nums).forEach(currList::add);
            currList.remove(i);
            for (int j = 1; j < currList.size(); j++) {
                if (currList.get(j) <= currList.get(j-1)) {
                    flag = false;
                    break;
                }
            }
            if (flag) return true;
        }
        
        return false;
    }
}

// second pass solution
class Solution {
    public boolean canBeIncreasing(int[] nums) {  
        for (int i = 0; i < nums.length; i++) {
            if (isIncreasing(nums, i)) return true;
        }      
        return false;
    }
    
    public boolean isIncreasing(int[] nums, int index) {
        for (int i = 1; i < nums.length; i++) {
            if (i == index || (index == 0 && i == 1)) continue;
            else if (i < index) {
                if (nums[i] <= nums[i-1]) {
                    return false;
                }
            } else if (i-1 == index) {
                if (nums[i] <= nums[i-2]) {
                    return false;
                }
            } else if (i > index + 1) {
                if (nums[i] <= nums[i-1]) {
                    return false;
                } 
            }
        }
        return true;
    } 
}
