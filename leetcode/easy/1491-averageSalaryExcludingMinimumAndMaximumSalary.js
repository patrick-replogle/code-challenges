/*
Given an array of unique integers salary where salary[i] is the salary of the employee i.

Return the average salary of employees excluding the minimum and maximum salary.

Example 1:
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500
*/

// first pass solution
var average = function(salary) {
    let max = Math.max(...salary);
    let min = Math.min(...salary);
    let sum = 0;
    let count = 0;
    
    for (let s of salary) {
        if (s !== max && s!== min) {
            sum += s;
            count++;
        }
    }
    return sum / count;
};

// second pass solution
var average = function(salary) {
    let sum = 0;
    let count = 0;
    salary.sort((a, b) => a - b);
    
    for (let i = 1; i < salary.length - 1; i++) {
        if (salary[i] !== salary[0] && salary[i] !== salary[salary.length - 1]) {
            sum += salary[i];
            count++;
        }
    }
    return sum / count;
};
