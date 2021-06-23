/*
Implement the class ProductOfNumbers that supports two methods:

1. add(int num)

Adds the number num to the back of the current list of numbers.
2. getProduct(int k)

Returns the product of the last k numbers in the current list.
You can assume that always the current list has at least k numbers.
At any time, the product of any contiguous sequence of numbers will fit into a single 32-bit integer without overflowing.


Example:
Input
["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
[[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]
Output
[null,null,null,null,null,null,20,40,0,null,32]
*/

// first pass solution
class ProductOfNumbers {
    constructor() {
        this.nums = [];
    }
    add(num) {
        this.nums.push(num);
    }
    getProduct(k) {
        let product = 1;
        let i = this.nums.length - 1;
        
        while (k > 0) {
            product *= this.nums[i];
            i--;
            k--;
        }
        return product;
    }
}
