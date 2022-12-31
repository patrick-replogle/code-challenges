class Solution {
    public int captureForts(int[] forts) {
        boolean containsOne = false;
        int capturedForts = 0;

        for (int i = 0; i < forts.length; i++) {
            if (forts[i] != 0) {
                int zeroes = 0;
                int j = i + 1;
                boolean isValid = false;

                while (j < forts.length) {
                    if (forts[i] == 1 && forts[j] == 1) break;
                    if (forts[i] == -1 && forts[j] == -1) break; 
                    if (forts[i] == -1 && forts[j] == 1) {
                        isValid = true;
                        break;
                    }
                    if (forts[i] == 1 && forts[j] == -1) {
                        isValid = true;
                        break;
                    }
                    zeroes++;
                    j++;
                }

                if (isValid) {
                    capturedForts = Math.max(capturedForts, zeroes);
                }
            }
        }

        return capturedForts;
    }
}
