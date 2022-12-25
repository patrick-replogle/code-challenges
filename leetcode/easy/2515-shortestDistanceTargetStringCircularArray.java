class Solution {
    public int closetTarget(String[] words, String target, int startIndex) {
        int output = Integer.MAX_VALUE;
        boolean seen = false;
        int currIdx = startIndex;
        int steps = 0;

        while (!seen) {
            if (words[currIdx].equals(target)) {
                output = Math.min(output, steps);
                break;
            }
            currIdx--;
            steps++;
          
            if (currIdx < 0) currIdx = words.length - 1;
            if (currIdx == startIndex) break;
        }

        seen = false;
        currIdx = startIndex;
        steps = 0;

        while (!seen) {
           if (words[currIdx].equals(target)) {
                output = Math.min(output, steps);
                break;
            }
            currIdx++;
            steps++;
          
            if (currIdx > words.length - 1) currIdx = 0;
            if (currIdx == startIndex) break;
        }

        return output == Integer.MAX_VALUE ? -1 : output;
    }
}
