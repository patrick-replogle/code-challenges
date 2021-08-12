// first pass solution
class Solution {
    public int[] memLeak(int memory1, int memory2) {
        int[] output = new int[3];
        int i = 1;
        
        while (true) {
            if (memory1 >= i && memory1 >= memory2) {
                memory1 -= i;
            }
            else if (memory2 >= i && memory2 >= memory1) {
                memory2 -= i;
            }
            else {
                output[0] = i;
                output[1] = memory1;
                output[2] = memory2;
                break;
            }
            i++;
        }
        
        return output;
    }
}
