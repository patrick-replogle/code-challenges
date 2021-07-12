class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        if (m == 1 && n == 1) {
            int temp1 = nums1[0];
            int temp2 = nums2[0];
            nums1[0] = Math.min(temp1, temp2);
            nums1[1] = Math.max(temp1, temp2);
            return;
        } 
            
        int i = m - 1;
        int j = n - 1;
        int k = nums1.length - 1;
        
        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k] = nums1[i];
                i--;
            } else {
                nums1[k] = nums2[j];
                j--;
            }
            k--;
        }
        
        while (i >= 0) {
            nums1[k] = nums1[i];
            i--; 
            k--;
        }
        
        while (j >= 0) {
            nums1[k] = nums2[j];
            j--;
            k--;
        } 
    }
}
