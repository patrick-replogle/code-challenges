class Solution {
    public String bestHand(int[] ranks, char[] suits) {
        Map<Integer, Integer> rankCount = new HashMap<>();
        Map<Character, Integer> suitCount = new HashMap<>();
        boolean flush = false;
        boolean three = false;
        boolean pair = false;
        boolean high = false;
        
        for (int i = 0; i < 5; i++) {
            int currRank = ranks[i];
            char currSuit = suits[i];
            
            rankCount.put(currRank, rankCount.getOrDefault(currRank, 0) + 1);
            suitCount.put(currSuit, suitCount.getOrDefault(currSuit, 0) + 1);
            
            if (suitCount.get(currSuit) == 5) flush = true;
            if (rankCount.get(currRank) == 3) three = true;
            if (rankCount.get(currRank) == 2) pair = true;
        }
        
        if (flush) return "Flush";
        if (three) return "Three of a Kind";
        if (pair) return "Pair";
        
        return "High Card";
    }
}
