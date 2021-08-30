class Solution {
    public List<String> findItinerary(List<List<String>> tickets) {
        Map<String, List<String>> map = new HashMap<>();
        Stack<String> stack = new Stack<>();
        List<String> output = new ArrayList<>();
        
        for (List<String> ticket : tickets) {
            String start = ticket.get(0);
            String end = ticket.get(1);
            if (!map.containsKey(start)) map.put(start, new ArrayList<String>());
            map.get(start).add(end);
        }
        
        for (List<String> list : map.values()) {
            Collections.sort(list);
        }
        
        stack.push("JFK");
        
        while (!stack.isEmpty()) {
            List<String> options = map.get(stack.peek());
            
            if (options == null || options.size() == 0) {
                output.add(stack.pop());
            } else {
                stack.push(options.remove(0));
            }
        }
        
        Collections.reverse(output);
        
        return output;
    }
}
