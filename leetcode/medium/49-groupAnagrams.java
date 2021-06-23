class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> output = new ArrayList<List<String>>();
        HashMap<String, List<String>> hashMap = new HashMap<String, List<String>>();
        
        for (String s : strs) {
            String[] arr = s.split("");
            Arrays.sort(arr);
            String curr = String.join("", arr);
            
            if (hashMap.get(curr) != null) {
                hashMap.get(curr).add(s);
            } else {
                hashMap.put(curr, new ArrayList<String>());
                hashMap.get(curr).add(s);
            }
        }
        
        for (List<String> arr : hashMap.values()) {
            output.add(arr);
        }
        return output;
    }
}
