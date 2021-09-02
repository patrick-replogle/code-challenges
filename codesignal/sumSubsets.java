int[][] sumSubsets(int[] arr, int num) {
    Set<String> set = new LinkedHashSet<>();
    
    DFS(arr, num, 0, set, "");
    
    int[][] output = new int[set.size()][];
    int j = 0;
    
    for (String s : set) {
        String[] strArr = s.split(",");
        int[] intArr = new int[strArr.length - 1];
        
        for (int i = 1; i < strArr.length; i++) {
            intArr[i-1] = Integer.parseInt(strArr[i]);
        }
        output[j] = intArr;
        j++;
    }
    
    return output;
}

void DFS(int[] arr, int num, int index, Set<String> set, String path) {
    if (num == 0) {
        set.add(path);
        return;
    }
    
    for (int i = index; i < arr.length; i++) {
        if (num - arr[i] >= 0) {
            DFS(arr, num - arr[i], i + 1, set, path + "," + arr[i]);
        }
    }
} 
