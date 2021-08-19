// first pass solution
class Solution {
    public List<Integer> filterRestaurants(int[][] restaurants, int veganFriendly, int maxPrice, int maxDistance) {
        List<Integer> filteredRestaurants = new ArrayList<>();
        Arrays.sort(restaurants, (a, b) -> b[1] == a[1] ? b[0] - a[0] : b[1] - a[1]);
        
        for (int[] res : restaurants) {
            if (!checkPrice(maxPrice, res[3])) continue;
            if (!checkDistance(maxDistance, res[4])) continue;
            if (veganFriendly == 1 && !checkVeganFriendly(veganFriendly, res[2])) continue;
            // all of user's criteria is met for restaurant if we make it here
            filteredRestaurants.add(res[0]);
        }
        
        return filteredRestaurants;   
    }
    public boolean checkPrice(int userMaxPrice, int restPrice) {
        return restPrice <= userMaxPrice;
    }
    public boolean checkDistance(int userMaxDistance, int restDistance) {
        return restDistance <= userMaxDistance;
    }
    public boolean checkVeganFriendly(int userVeganFriendly, int resVeganFriendly) {
        return userVeganFriendly == resVeganFriendly;
    }
}

// cleaned up a bit
class Solution {
    public List<Integer> filterRestaurants(int[][] restaurants, int veganFriendly, int maxPrice, int maxDistance) {
        List<Integer> filteredRestaurants = new ArrayList<>();
        Arrays.sort(restaurants, (a, b) -> b[1] == a[1] ? b[0] - a[0] : b[1] - a[1]);
        
        for (int[] res : restaurants) {
            if (maxPrice < res[3]) continue;
            if (maxDistance < res[4]) continue;
            if (veganFriendly == 1 && veganFriendly != res[2]) continue;
            filteredRestaurants.add(res[0]);
        }
        
        return filteredRestaurants;   
    }
}
