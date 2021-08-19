// first pass solution
class Station {
    Map<String, List<Integer>> map = new HashMap<>();
    
    public Station() {}
    
    public Map<String, List<Integer>> getMap() {
        return map;
    }
    
    public void setMap(String destination, int time) {
        if (!map.containsKey(destination)) {
            map.put(destination, new ArrayList<Integer>());
        }
        map.get(destination).add(time);
    }
}

class UndergroundSystem {
    Map<Integer, List<Object>> users = new HashMap<>();
    Map<String, Station> stations = new HashMap<>();

    public UndergroundSystem() {}
    
    public void checkIn(int id, String stationName, int t) {
        if (!stations.containsKey(stationName)) {
            stations.put(stationName, new Station());
        } 
        List<Object> arr = new ArrayList<>(Arrays.asList(stationName, t));
        users.put(id, arr);
    }
    
    public void checkOut(int id, String stationName, int t) {
        List<Object> arr = users.get(id);
        stations.get(arr.get(0)).setMap(stationName, t - (int) arr.get(1));
        users.remove(id); 
    }
    
    public double getAverageTime(String startStation, String endStation) {
        int sum = 0;
        int count = 0;
        Station station = stations.get(startStation);
        
        for (int num : station.getMap().get(endStation)) {
            count++;
            sum += num;
        }
        return (double) sum / count;
    }
}
