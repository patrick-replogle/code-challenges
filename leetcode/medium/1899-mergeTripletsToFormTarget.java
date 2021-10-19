class Solution {
    public boolean mergeTriplets(int[][] triplets, int[] target) {
        int[] output = new int[3];
        
        for (int[] triplet : triplets) {
            if (triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2]) continue;
            for (int i = 0; i < 3; i++) {
                if (triplet[i] == target[i]) output[i] = target[i];
            }
        }
        return output[0] == target[0] && 
               output[1] == target[1] && 
               output[2] == target[2];
    }
}
