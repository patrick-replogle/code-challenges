class Result {
    public static long marcsCakewalk(List<Integer> calorie) {
        long miles = 0;
        int j = 0;
        Collections.sort(calorie, Collections.reverseOrder());
        
        for (int i = 0; i < calorie.size(); i++) {
            miles += (long)(Math.pow(2, j) * calorie.get(i));
            j++;
        }
        return miles;
    }
}
