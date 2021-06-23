# Given an integer n, return the number of trailing zeroes in n!.

# Follow up: Could you write a solution that works in logarithmic time complexity?

# Example 1:

# Input: n = 3
# Output: 0
# Explanation: 3! = 6, no trailing zero.
# Example 2:

# Input: n = 5
# Output: 1
# Explanation: 5! = 120, one trailing zero.
# Example 3:

# Input: n = 0
# Output: 0

class Solution:
    def trailingZeroes(self, n: int) -> int:
        sum = 1
        
        for i in range(2, n+1):
            sum = sum * i;
            
        sum = str(sum)
        count = 0
        
        for i in range(len(sum) - 1, 0, -1):
            if sum[i] == "0":
                count += 1
            else:
                break
                
        return count
