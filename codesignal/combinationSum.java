String combinationSum(int[] a, int sum) {
    StringBuilder sb = new StringBuilder();
    Set<String> set = new LinkedHashSet<>();
    
    Arrays.sort(a);
    
    DFS(a, sum, 0, set, "");
    
    for (String str : set) {
        sb.append(str);
    }
    
    return sb.length() == 0 ? "Empty" : sb.toString();
}

void DFS(int[] a, int sum, int index, Set<String> set, String path) {
    if (sum == 0) {
        set.add("(" + path.trim() + ")");
        return;
    }
    
    for (int i = index; i < a.length; i++) {
        if (sum - a[i] >= 0) {
            DFS(a, sum - a[i], i, set, path + " " + a[i]);
        }
    }
}
