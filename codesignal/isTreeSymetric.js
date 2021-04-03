/*
Given a binary tree t, determine whether it is symmetric around its center, i.e. each side mirrors the other.

Example

For

t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}
the output should be isTreeSymmetric(t) = true.

Here's what the tree in this example looks like:

    1
   / \
  2   2
 / \ / \
3  4 4  3
As you can see, it is symmetric.

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
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}
the output should be isTreeSymmetric(t) = false.

Here's what the tree in this example looks like:

    1
   / \
  2   2
   \   \
   3    3
As you can see, it is not symmetric.
*/

// first pass solution
function isTreeSymmetric(t) {  
    function solve(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.value !== right.value) return false;
        return solve(left.left, right.right) && solve(left.right, right.left);
    }
    return solve(t, t);
}

// second pass solution
function isTreeSymmetric(t) {  
    let stack1 = [t];
    let stack2 = [t];
    
    while (stack1.length && stack2.length) {
        let node1 = stack1.shift();
        let node2 = stack2.shift();
        
        if (!node1 && !node2) continue;
        if (!node1 || !node2) return false;
        if (node1.value !== node2.value) return false;
        stack1.push(node1.left, node1.right)
        stack2.push(node2.right, node2.left);
    }
    return true;
}
