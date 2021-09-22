// first pass solution
class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int x = 0;
        
        for (String operation : operations) {
            x += performOperation(operation);
        }
        
        return x;
    }
    public int performOperation(String operation) {
        int output = 0;
        
        switch(operation) {
            case "++X":
                output += 1;
                break;
            case "X++":
                output += 1;
                break;
            case "--X":
                output -= 1;
                break;
            case "X--":
                output -= 1;
                break;
            default:
                break;
        }
        return output;
    }
}
