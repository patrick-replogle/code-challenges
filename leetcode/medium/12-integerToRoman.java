class Solution {
    public String intToRoman(int num) {
        String output = "";
        String[] one = { "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" };
        String[] two = { "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" };
        String[] three = { "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM" };
        String[] four = { "", "M", "MM", "MMM" };
        
        output += four[(int) Math.floor(num / 1000)];
        output += three[(int) Math.floor((num % 1000) / 100)];
        output += two[(int) Math.floor((num % 100) / 10)];
        output += one[num % 10];
        
        return output;
    }
}
