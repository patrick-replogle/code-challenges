/*
You are given two arrays,  and , both containing  integers.

A pair of indices  is beautiful if the  element of array  is equal to the  element of array . In other words, pair  is beautiful if and only if . A set 
containing beautiful pairs is called a beautiful set.

A beautiful set is called pairwise disjoint if for every pair  belonging to the set there is no repetition of either  or  values. For instance, if  and  
the beautiful set  is not pairwise disjoint as there is a repetition of , that is .

Your task is to change exactly  element in  so that the size of the pairwise disjoint beautiful set is maximum.

Function Description

Complete the beautifulPairs function in the editor below. It should return an integer that represents the maximum number of pairwise disjoint beautiful pairs 
that can be formed.

beautifulPairs has the following parameters:

A: an array of integers
B: an array of integers
*/

// first pass solution
function beautifulPairs(A, B) {
    let count = 0;
    let set1 = new Set();
    let set2 = new Set();
    
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j] && !set1.has(i) && !set2.has(j)) {
                count++;
                set1.add(i);
                set2.add(j)
            } 
            
        }
    }
    if (count === A.length) {
        return count - 1;
    }
    return count + 1;
}
