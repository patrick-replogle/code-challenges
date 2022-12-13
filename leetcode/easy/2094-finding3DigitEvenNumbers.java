class Solution {
    public int[] findEvenNumbers(int[] digits) {
        Set<Integer> set = new HashSet<>();
        Set<Integer> seen = new HashSet<>();

        for (int i = 0; i < digits.length; i++) {
            if (digits[i] == 0 || seen.contains(digits[i])) continue;
            seen.add(digits[i]);
            for (int j = 0; j < digits.length; j++) {
                if (i == j) continue;
                for (int k = 0; k < digits.length; k++) {
                    if (i == j || i == k || j == k) continue;

                    String s = "" + digits[i] + digits[j] + digits[k];
                    int num = Integer.parseInt(s);
                    if (num >= 100 && num % 2 == 0) set.add(num);
                }
            }
        }

        int[] output = new int[set.size()];
        int i = 0;

        for (int num : set) {
            output[i] = num;
            i++;
        }

        Arrays.sort(output);

        return output;
    }
}
