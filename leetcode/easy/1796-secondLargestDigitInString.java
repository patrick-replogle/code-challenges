// first pass solution
class Solution {
    public int secondHighest(String s) {
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        Set<Character> nums = new HashSet<>(Arrays.asList('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'));
        Set<Character> seen = new HashSet<>();
        
        for (int i = 0; i < s.length(); i++) {
            if (nums.contains(s.charAt(i)) && !seen.contains(s.charAt(i))) {
                pq.add(Integer.parseInt(String.valueOf(s.charAt(i))));
                seen.add(s.charAt(i));
            }
        }
        
        if (pq.size() < 2) return -1;
        
        pq.poll();
        
        return pq.poll();
    }
}

// second pass solution
class Solution {
    public int secondHighest(String s) {
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        Set<Character> nums = new HashSet<>(Arrays.asList('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'));
        
        for (int i = 0; i < s.length(); i++) {
            if (nums.contains(s.charAt(i))) {
                pq.add(Integer.parseInt(String.valueOf(s.charAt(i))));
            }
        }
        
        if (pq.size() < 2) return -1;
        
        int largest = pq.poll();
        
        while (pq.size() > 0 && pq.peek() == largest) {
            pq.poll();
        }
        
        if (pq.size() > 0) {
            return pq.poll();
        }
        return -1;
    }
}

// third pass solution
class Solution {
    public int secondHighest(String s) {
        Set<Integer> nums = new HashSet<>();
        
        for (int i = 0; i < s.length(); i++) {
            if (Character.isDigit(s.charAt(i))) {
                nums.add(Integer.parseInt(String.valueOf(s.charAt(i))));
            }
        }
        
        if (nums.size() < 2) return -1;
        
        List<Integer> arr = new ArrayList<>();
        
        for (int num : nums) {
            arr.add(num);
        }
        
        Collections.sort(arr);
        
        return arr.get(arr.size() - 2);
    }
}

// fourth pass solution
class Solution {
    public int secondHighest(String s) {
        int max = -1;
        int second = -1;
        
        for (int i = 0; i < s.length(); i++) {
            if (Character.isDigit(s.charAt(i))) {
                int num = Integer.parseInt(String.valueOf(s.charAt(i)));
                if (num > max) {
                    second = max;
                    max = num;
                } else if (num != max){
                    second = Math.max(second, num);
                } 
            }
        }
        return second;
    }
}
