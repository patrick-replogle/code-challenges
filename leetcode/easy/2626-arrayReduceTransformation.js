var reduce = function(nums, fn, init) {
    let output = init;

    nums.forEach((elem) => {
        output = fn(output, elem);
    })

    return output;
};
