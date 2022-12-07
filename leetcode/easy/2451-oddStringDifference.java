class Solution {
    public String oddString(String[] words) {
        Map<String, List<String>> map = new HashMap<>();
        String output = "";

        for (String word : words) {
            StringBuilder sb = new StringBuilder();
            sb.append("[");

            for (int i = 0; i < word.length() - 1; i++) {
                int next = ((int) word.charAt(i+1)) - 97;
                int curr = ((int) word.charAt(i)) - 97;
                sb.append(next - curr + ",");
            }

            sb.append("]");

            String s = sb.toString();

            if (!map.containsKey(s)) {
                List<String> arr = new ArrayList<>();
                arr.add(word);
                map.put(s, arr);
            } else {
                List<String> arr = map.get(s);
                arr.add(s);
            }
        }

        for (List<String> arr : map.values()) {
            System.out.println(arr.size());
            if (arr.size() == 1) {
                output = arr.get(0);
                break; 
            }
        }
        return output;
    }
}
