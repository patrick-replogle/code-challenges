// first pass solution -> very ugly looking, but passes all test cases
class Solution {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        Map<Integer, Integer> intCount = new HashMap<>();
        Set<Integer> set = new HashSet<>();
        List<Integer> oddBalls = new ArrayList<>(); 
        int i = 0;
        int j = 0;
        
        for (int num : arr2) {
            set.add(num); 
        }
        
        for (int num : arr1) {
            intCount.put(num, intCount.getOrDefault(num, 0) + 1);
            if (!set.contains(num)) oddBalls.add(num); 
        }
        
        while (j < arr2.length) {  
            if (intCount.get(arr2[j]) > 0) {
                arr1[i] = arr2[j];
                intCount.put(arr2[j], intCount.get(arr2[j]) - 1);
            } else {
                j++;
                if (j >= arr2.length) break; 
                arr1[i] = arr2[j];
                intCount.put(arr2[j], intCount.get(arr2[j]) - 1);
            }
            i++;
        }
        
        Collections.sort(oddBalls); 
        
        j = oddBalls.size() - 1;
        i = arr1.length - 1;
        
        while (j >= 0) {
            arr1[i] = oddBalls.get(j); 
            j--;
            i--;
        }
 
        return arr1;
    }
}
