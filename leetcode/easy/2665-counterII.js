var createCounter = function(init) {
    let num = init; 

    return {
        increment: () => {
            num++;
            return num;
        },
        decrement: () => {
            num--;
            return num;
        },
        reset: () => {
            num = init;
            return num;
        }
    }
};
