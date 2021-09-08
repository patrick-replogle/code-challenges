// first pass solution
function freqQuery(queries) {
    let arr = [];
    let map = {};
    let values = {};
    
    for (let query of queries) {
        let type = query[0];
        let num = query[1];

        switch(type) {
            case 1:
                values[map[num]] && values[map[num]]--;
                map[num] ? map[num]++ : map[num] = 1;
                values[map[num]] ? values[map[num]]++ : values[map[num]] = 1;
                break;
            case 2:
                values[map[num]] && values[map[num]]--;
                map[num] && map[num]--;
                values[map[num]] ? values[map[num]]++ : values[map[num]] = 1;
                break;
            case 3:
                arr.push(values[num] && values[num] >= 0 ? 1 : 0);
                break;
            default:
                break;
        }
    }
    
    return arr;
}
