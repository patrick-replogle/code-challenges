// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with 
// no order requirement. You could assume there always exists an answer.

// Example 1:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

// Example 2:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]

// Example 3:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]

// first pass solution
var findRestaurant = function(list1, list2) {
    let count1 = {};
    let count2 = {};
    let minIndex = Infinity;
    let output = [];
    
    
    for (let i = 0; i < list1.length; i++) {
        count1[list1[i]] = i;
    }
    
    for (let i = 0; i < list2.length; i++) {
        count2[list2[i]] = i;
    }
    
    for (let key in count1) {
        if (key in count2) {
            if (count1[key] + count2[key] < minIndex) {
                minIndex = count1[key] + count2[key];
            }
        }
    }
    
    for (let key in count1) {
        if (key in count2) {
            if (count1[key] + count2[key] === minIndex) {
                output.push(key);
            }
        }
    }
    return output;
};

// second pass solution refactoring the original 
var findRestaurant = function(list1, list2) {
    let count = {};
    let minIndex = Infinity;
    let output = [];
    
    
    for (let i = 0; i < list1.length; i++) {
        count[list1[i]] = i;
    }
    
    for (let i = 0; i < list2.length; i++) {
        if (list2[i] in count && i + count[list2[i]] < minIndex) {
            minIndex = i + count[list2[i]];
            output = [];
            output.push(list2[i]);
        } else if (list2[i] in count && i + count[list2[i]] === minIndex) {
            output.push(list2[i]);
        }
    }
    return output;
};



