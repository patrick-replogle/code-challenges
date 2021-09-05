// first pass solution
function gamingArray(arr) {
    let turn = 'BOB';
    let maxIdx = arr.length;
    
    while (maxIdx >= 0) {
        let max = -Infinity, j = -1;
        for (let i = 0; i < maxIdx; i++) {
            if (arr[i] > max) {
                max = arr[i];
                j = i;
            }
        }
        maxIdx = j;
        if (maxIdx === 0) return turn;
        else turn = turn === 'BOB' ? 'ANDY' : 'BOB';
    }
}
