var addTwoPromises = async function(promise1, promise2) {
    const one = await promise1;
    const two = await promise2;

    return one + two;
};
