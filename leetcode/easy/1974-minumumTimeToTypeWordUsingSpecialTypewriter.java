// first pass solution
class Solution {
    public int minTimeToType(String word) {
        int output = 0;
        char curr = 'a';
        char[] typewriter = new char[]{'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                           'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                            'u', 'v', 'w', 'x', 'y', 'z'};
        
        for (char c : word.toCharArray()) {
            int clockWise = 0;
            int counterClockwise = 0;
            int i = curr - 'a';
            
            while (typewriter[i] != c) {
                i--;
                if (i == -1) i = 25;
                counterClockwise++;
            }
            
            i = curr - 'a';
            
            while (typewriter[i] != c) {
                i++;
                if (i == 26) i = 0;
                clockWise++;
            }
            
            output += Math.min(clockWise, counterClockwise) + 1;
            curr = typewriter[i];
        }
        
        return output;
    }
}

// second pass solution
class Solution {
    public int minTimeToType(String word) {
        int output = 0;
        char curr = 'a';
        
        for (char c : word.toCharArray()) {
            int clockwise = Math.abs(curr - c);
            int counterClockwise = Math.abs(26 - clockwise);
            output += Math.min(counterClockwise, clockwise) + 1;
            curr = c;
        }
        
        return output;
    }
}
