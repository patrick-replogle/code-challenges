// first pass solution
class Solution {
    public int largestInteger(int num) {
        List<Integer> odd = new ArrayList<>();
        List<Integer> even = new ArrayList<>();
        StringBuilder sortedStr = new StringBuilder();
        String str = String.valueOf(num);
        
        for (int i = 0; i < str.length(); i++) {
            int currDigit = Integer.parseInt(String.valueOf(str.charAt(i)));

            if (currDigit % 2 == 0) {
                even.add(currDigit);
            } else {
                odd.add(currDigit);
            }
        }
        
        Collections.sort(odd);
        Collections.sort(even);
        
        for (int i = 0; i < str.length(); i++) {
            int currDigit = Integer.parseInt(String.valueOf(str.charAt(i)));

            if (currDigit % 2 == 0 && even.size() > 0) {
                int lastIdx = even.size() - 1;
                sortedStr.append(even.remove(lastIdx));
            } 
            else if (currDigit % 2 != 0 && odd.size() > 0) {
                int lastIdx = odd.size() - 1;
                sortedStr.append(odd.remove(lastIdx));
            }
        }
        
        return Integer.parseInt(sortedStr.toString());
    }
}
