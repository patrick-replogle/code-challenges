class Solution {
    public boolean haveConflict(String[] event1, String[] event2) {
        int start1 = Integer.valueOf(event1[0].replace(":", ""));
        int end1 = Integer.valueOf(event1[1].replace(":", ""));
        int start2 = Integer.valueOf(event2[0].replace(":", ""));
        int end2 = Integer.valueOf(event2[1].replace(":", ""));

        if (start2 >= start1 && start2 <= end1) return true;
        if (end2 >= start1 && end2 <= end1) return true;
        if (start1 >= start2 && start1 <= end2) return true;
        if (end1 >= start2 && end1 <= end2) return true;

        return false;
    }
}
