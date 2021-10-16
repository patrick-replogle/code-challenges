// first pass solution
import java.text.SimpleDateFormat;

class Solution {
    public List<String> alertNames(String[] keyName, String[] keyTime) {
        Map<String, List<String>> map = new HashMap<>();
        List<String> output = new ArrayList<>();
        
        for (int i = 0; i < keyName.length; i++) {
            if (!map.containsKey(keyName[i])) {
                map.put(keyName[i], new ArrayList<>());
            }
            map.get(keyName[i]).add(keyTime[i]);
        }
        
        for (String key : map.keySet()) {
            if (map.get(key).size() > 2) {
                if (shouldWarn(map.get(key))) {
                    output.add(key);
                }
            }
        }
        
        Collections.sort(output, (a, b) -> a.compareTo(b));
        
        return output;
    }
    
    public boolean shouldWarn(List<String> arr) {
        SimpleDateFormat format = new SimpleDateFormat("HH:mm");
        Collections.sort(arr);

        for (int i = 0; i < arr.size() - 2; i++) {
            try {
                long first = format.parse(arr.get(i)).getTime();
                long third = format.parse(arr.get(i+2)).getTime();
                if (third - first <= 3600000) return true;
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return false;
    }
}
