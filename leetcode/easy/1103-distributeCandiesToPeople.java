// first pass solution
class Solution {
    public int[] distributeCandies(int candies, int num_people) {
        int[] output = new int[num_people];
        int i = 0;
        int n = 1;
        
        while (candies > 0) {
            if (candies <= n) {
                output[i] += candies;
                break;
            }
            output[i] += n;
            candies -= n;
            n++;
            i++;
            i = i % num_people;
        } 
        return output;
    }
}
