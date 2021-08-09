bool isPalindrome(int x){
    if (x < 0) return false;
    
    int *arr = malloc(sizeof(int) * 15);
    int i = 0;
    int j = 0;
    
    while (x > 0) {
        arr[j] = x % 10;
        x = floor(x / 10);
        if (x > 0) j++;
    } 
    
    while (i < j) {
        if (arr[i] != arr[j]) {
            return false;
        }
        i++;
        j--;
    }
    
    free(arr);
    
    return true;
}
