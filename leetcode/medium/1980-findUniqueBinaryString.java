// first pass solution
class Solution {
    public String findDifferentBinaryString(String[] nums) {
        Set<String> set = Arrays.stream(nums).collect(Collectors.toSet());
        int len = nums[0].length();
        List<String> arr = new ArrayList<>();

        recurse(set, arr, new StringBuilder(), len);
        
        return arr.size() > 0 ? arr.get(0) : "";
    }
    
    public void recurse(Set<String> set, List<String> arr, StringBuilder path, int len) {
        if (path.length() == len && !set.contains(path.toString())) {
            arr.add(path.toString());
        }
        
        if (arr.size() > 0 || path.length() >= len) return;
        
        recurse(set, arr, new StringBuilder(path).append("0"), len);
        recurse(set, arr, new StringBuilder(path).append("1"), len);
    }
}
