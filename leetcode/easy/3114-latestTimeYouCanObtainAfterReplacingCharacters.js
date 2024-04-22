var findLatestTime = function(s) {
    const start = s.slice(0, 2) + s.slice(3)
    let output = '0000';
    let indexMaxNum = {
        0: 1,
        1: 9,
        2: 5,
        3: 9
    }


    function solve(curr, index) {
        if (index > 4) return undefined;

        if (index === 4 && Number(curr) <= 1159 && Number(output) < Number(curr)) {
            output = curr;
            return undefined;
        }

        if (curr[index] === '?') {
            for (let i = 0; i <= indexMaxNum[index]; i++) {
                solve(curr.slice(0, index) + i + curr.slice(index + 1), index + 1);
            }
        } else {
            solve(curr, index + 1);
        }
    }

    solve(start, 0);

    return output.slice(0, 2) + ':' + output.slice(2);

};
