var once = function(fn) {
    let hasBeenCalled = false;
    
    return function(...args){
        if (!hasBeenCalled && typeof fn === 'function') {
            hasBeenCalled = true;
            return fn(...args);
        }
        return undefined;
    }
};
