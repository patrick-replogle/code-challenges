var chunk = function(arr, size) {
    const chunks = [];
    let tempArr = [];

    for (let num of arr) {
        tempArr.push(num);

        if (tempArr.length === size) {
            chunks.push(tempArr);
            tempArr = [];
        }
    }

    if (tempArr.length) {
        chunks.push(tempArr);
    }

    return chunks;
};
