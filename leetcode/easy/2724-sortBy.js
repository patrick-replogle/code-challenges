var sortBy = function(arr, fn) {
    arr.sort((a, b) => fn(a) - fn(b));

    return arr;
};
