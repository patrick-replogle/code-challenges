var map = function(arr, fn) {
    const output = [];

    arr.forEach((el, i) => {
        output.push(fn(el, i))
        }
    );

    return output;
};
