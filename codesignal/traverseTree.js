/*
Note: Try to solve this task without using recursion, since this is what you'll be asked to do during an interview.

Given a binary tree of integers t, return its node values in the following format:

The first element should be the value of the tree root;
The next elements should be the values of the nodes at height 1 (i.e. the root children), ordered from the leftmost to the rightmost one;
The elements after that should be the values of the nodes at height 2 (i.e. the children of the nodes at height 1) ordered in the same way;
Etc.
Example

For

t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": {
            "value": 5,
            "left": null,
            "right": null
        },
        "right": null
    }
}
the output should be
traverseTree(t) = [1, 2, 4, 3, 5].

This t looks like this:

     1
   /   \
  2     4
   \   /
    3 5
*/

// first pass solution
function traverseTree(t) {
    if (!t) return [];
    let queue = [t];
    let values = [];
    
    while (queue.length) {
        let len = queue.length;
        
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            values.push(curr.value);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }
    return values;
}
