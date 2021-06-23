/*
Given an array of integers, determine whether the array can be sorted in ascending order using only one of the following operations one time.

Swap two elements.
Reverse one sub-segment.
Determine whether one, both or neither of the operations will complete the task. Output is as follows.

If the array is already sorted, output yes on the first line. You do not need to output anything else.

If you can sort this array using one single operation (from the two permitted operations) then output yes on the first line and then:

If elements can only be swapped,  and , output swap l r in the second line.  and  are the indices of the elements to be swapped, assuming that the 
array is indexed from  to .
If elements can only be reversed, for the segment , output reverse l r in the second line.  and  are the indices of the first and last elements of the 
subarray to be reversed, assuming that the array is indexed from  to . Here  represents the subarray that begins at index  and ends at index , both inclusive.
If an array can be sorted both ways, by using either swap or reverse, choose swap.

If the array cannot be sorted either way, output no on the first line.
*/

// first pass solution
function almostSorted(arr) {
    let sorted = [...arr].sort((a, b) => a - b).join('');
    let start, end;
    
    if (arr.join('') === sorted) {
        console.log('yes');
        return;
    }
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            start = i;
            for (let j = arr.length - 1; j > i; j--) {
                if (arr[j] < arr[start]) {
                    end = j;
                    break;
                }
            }
            break;
        }
    }
    [arr[start], arr[end]] = [arr[end], arr[start]];
  
    if (arr.join('') === sorted) {
        console.log('yes');
        console.log(`swap ${start + 1} ${end + 1}`);
        return;
    }
    
    [arr[start], arr[end]] = [arr[end], arr[start]];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            start = i;
            break;
        }
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < arr[i - 1]) {
            end = i;
            break;
        }
    }
    
    let next = [...arr.slice(0, start), ...arr.slice(start, end + 1).reverse(), ...arr.slice(end + 1)]
    
    if (next.join('') === sorted) {
        console.log('yes')
        console.log(`reverse ${start + 1} ${end + 1}`)
    } else {
       console.log('no'); 
    }
} 
