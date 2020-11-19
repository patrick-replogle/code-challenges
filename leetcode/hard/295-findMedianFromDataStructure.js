// Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median 
// is the mean of the two middle value.

// For example,
// [2,3,4], the median is 3

// [2,3], the median is (2 + 3) / 2 = 2.5

// Design a data structure that supports the following two operations:

// void addNum(int num) - Add a integer number from the data stream to the data structure.
// double findMedian() - Return the median of all elements so far.

// Example:

// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3) 
// findMedian() -> 2

// first pass solution
var MedianFinder = function() {
    this.nums = [];
    this.size = 0;
};

MedianFinder.prototype.addNum = function(num) {
    this.nums.push(num);
    this.nums.sort((a, b) => a - b);
    this.size++;
};

MedianFinder.prototype.findMedian = function() {
    let mid = Math.floor(this.size / 2);
    
    if (this.isEven()) {  
        return (this.nums[mid] + this.nums[mid - 1]) / 2;
    } else {
        return this.nums[mid];
    }
};

MedianFinder.prototype.isEven = function() {
    if (this.size % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// second pass => converted to a class and used binary search instead of repeatedly sorting the array
class MedianFinder {
    constructor() {
        this.nums = [];
        this.size = 0;
    }

    addNum(num) {
        if (this.size === 0) {
            this.nums.push(num);
        } else {
            let index = this.binarySearch(num);
            if (index === this.size) {
                this.nums.push(num);
            } else {
                this.nums.splice(index, 0, num);
            }
        }
        console.log(this.nums)
        this.size++;
    }
    
    binarySearch(num) {       
        let l = 0;
        let r = this.size - 1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
        
            if (this.nums[mid] >= num) r = mid - 1;
            else l = mid + 1;
        }
        return l;
    }

    findMedian() {
        let mid = Math.floor(this.size / 2);

        if (this.isEven()) {  
            return (this.nums[mid] + this.nums[mid - 1]) / 2;
        } else {
            return this.nums[mid];
        }
    }

    isEven() {
        if (this.size % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
}
