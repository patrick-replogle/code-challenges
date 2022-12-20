class Solution {
    public int similarPairs(String[] words) {
        List<String> arr = new ArrayList<>();
        int pairs = 0;

        for (String s : words) {
            Set<Character> set = new HashSet<>();

            for (char c : s.toCharArray()) {
                set.add(c);
            };


            char[] charArr = new char[set.size()];
            int i = 0;

            for (char c : set) {
                charArr[i] = c;
                i++;
            }

            Arrays.sort(charArr);
            String str = new String(charArr);
            arr.add(str);
        }

        for (int i = 0; i < arr.size() - 1; i++) {
            for (int j = i + 1; j < arr.size(); j++) {
                if (arr.get(i).equals(arr.get(j))) {
                    pairs++;
                }
            }
        }

        return pairs;
    }
}
