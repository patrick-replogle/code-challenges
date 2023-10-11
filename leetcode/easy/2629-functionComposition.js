var compose = function(functions) {
	return function(x) {
        let output = x;

        for (let i = functions.length - 1; i >=0; i--) {
            let fn = functions[i];
            output = fn(output);
        }
        return output;
    }
};
