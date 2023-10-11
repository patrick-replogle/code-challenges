var filter = function(arr, fn) {
    const output = [];

    arr.forEach((elem, i) => {
        if (fn(elem, i)) output.push(elem);
    })

    return output;
};
