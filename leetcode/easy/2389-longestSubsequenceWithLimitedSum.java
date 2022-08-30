class Solution {
    public int[] answerQueries(int[] nums, int[] queries) {
        int[] answer = new int[queries.length];
        int j = 0;
        
        Arrays.sort(nums);
        
        for (int num: queries) {
            int currTotal = 0;
            int currLen = 0;
            for (int i = 0; i < nums.length; i++) {
                currTotal += nums[i];
                if (currTotal > num) break;
                currLen++;
            }
            answer[j] = currLen;
            j++;
        }
        
        return answer;
    }
}
