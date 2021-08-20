// first pass solution
class Solution {
    public String defangIPaddr(String address) {
        StringBuilder sb = new StringBuilder();
        String[] array = address.split("\\.");
       
        for (int i = 0; i < array.length; i++) {
            if (i < array.length - 1) {
                sb.append(array[i] + "[.]");
            } else {
                sb.append(array[i]);
            }
        }
        return sb.toString();
    }
}

// second pass solution
class Solution {
    public String defangIPaddr(String address) {
        return address.replaceAll("\\.", "[.]");
    }
}
