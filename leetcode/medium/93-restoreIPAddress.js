// Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s. You can return them in any order.

// A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots and cannot have leading zeros. 
// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses. 

// Example 1:

// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]
// Example 2:

// Input: s = "0000"
// Output: ["0.0.0.0"]
// Example 3:

// Input: s = "1111"
// Output: ["1.1.1.1"]
// Example 4:

// Input: s = "010010"
// Output: ["0.10.0.10","0.100.1.0"]

// iterative solution using DFS/stack
const restoreIpAddresses = function(s) {
    let result = [];
    let stack = [[s, []]];
    
    while (stack.length > 0) {
        let [str, path] = stack.pop();
        
        if (str.length === 0 && path.length === 4) {
            result.push(path.join("."));
        }
        
        else if (path.length > 4) {
            continue;
        }
        
        else {
            for (let i = 1; i < Math.min(4, str.length + 1); i++) {
                let curr = str.substring(0, i);
                
                if (curr.length > 0 && curr >= 0 && curr <= 255) {
                    if (i > 1 && curr[0] === "0") continue;
                    else stack.push([str.slice(i), [...path, curr]])
                }
            }
        }
    }
    return result;
}

// recursive solution
const restoreIpAddresses = function(s) {
    let result = [];
    
    function dfs(str, path) {
        if (path.length > 4) return;
        if (path.length === 4 && str.length === 0) {
            result.push(path.join("."));
            return;
        }
        
        for (let i = 1; i < Math.min(4, str.length + 1); i++) {
            let curr = str.slice(0, i);
            if (curr >= 0 && curr <= 255) {
                if (i > 1 && curr[0] === "0") break;
                dfs(str.slice(i), [...path, curr]);
            }
        }
    }
    dfs(s, [])
    
    return result;
}
