/*
Given two binary trees t1 and t2, determine whether the second tree is a subtree of the first tree. A subtree for vertex v in a binary tree 
t is a tree consisting of v and all its descendants in t. Determine whether or not there is a vertex v (possibly none) in tree t1 such that a 
subtree for vertex v (possibly empty) in t1 equals t2.

Example

For

t1 = {
    "value": 5,
    "left": {
        "value": 10,
        "left": {
            "value": 4,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": {
                "value": 2,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 6,
            "left": null,
            "right": {
                "value": -1,
                "left": null,
                "right": null
            }
        }
    },
    "right": {
        "value": 7,
        "left": null,
        "right": null
    }
}
and

t2 = {
    "value": 10,
    "left": {
        "value": 4,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 6,
        "left": null,
        "right": {
            "value": -1,
            "left": null,
            "right": null
        }
    }
}
the output should be isSubtree(t1, t2) = true.

This is what these trees look like:

      t1:             t2:
       5              10
      / \            /  \
    10   7          4    6
   /  \            / \    \
  4    6          1   2   -1
 / \    \
1   2   -1
As you can see, t2 is a subtree of t1 (the vertex in t1 with value 10).
*/

// first pass solution
function isSubtree(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1) return false; 
    if (!t2) return true;
    
    function dft(t1, t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        if (t1.value !== t2.value) return false;
        return dft(t1.left, t2.left) && dft(t1.right, t2.right);
    }
    
    let stack = [t1];
    
    while (stack.length) {
        let currNode = stack.pop();
        if (dft(currNode, t2)) return true;
        if (currNode.left) stack.push(currNode.left);
        if (currNode.right) stack.push(currNode.right);
    }
    return false;
}
