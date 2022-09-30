class Solution {
    public List<List<Integer>> findWinners(int[][] matches) {
        Map<Integer, Integer> map = new HashMap<>();
        List<List<Integer>> output = new ArrayList<List<Integer>>();
        Set<Integer> winnerSet = new HashSet<>();
        Set<Integer> loserSet = new HashSet<>();
        
        output.add(new ArrayList<Integer>());
        output.add(new ArrayList<Integer>());
        
        for (int i = 0; i < matches.length; i++) {
            int loser = matches[i][1];
            map.put(loser, map.getOrDefault(loser, 0) + 1);
        }
        
        for (int[] arr : matches) {
            int winner = arr[0];
            int loser = arr[1];
            
            if (!map.containsKey(winner) && !winnerSet.contains(winner)) {
                output.get(0).add(winner);
                winnerSet.add(winner);
            }
            
            if (map.get(loser) == 1 && !loserSet.contains(loser)) {
                output.get(1).add(loser);
                loserSet.add(loser);
            }
        }
        
        Collections.sort(output.get(0));
        Collections.sort(output.get(1));
        
        return output;
    }
}
