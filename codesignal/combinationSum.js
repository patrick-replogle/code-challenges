// first pass solution
function combinationSum(a, sum) {
    let set = new Set();
    a.sort((a, b) => a - b);
    
    function DFS(a, sum, currSum, path, index) {
        if (currSum === sum) {
            set.add('(' + path.join(' ') + ')');
            return;
        }
        
        for (let i = index; i < a.length; i++) {
            if (currSum + a[i] <= sum) {
                DFS(a, sum, currSum + a[i], [...path, a[i]], i);
            }
        }
    }
    
    DFS(a, sum, 0, [], 0);
    
    return set.size > 0 ? Array.from(set).join("") : 'Empty';
}
