Array.prototype.last = function() {
    const len = this.length;

    return len ? this[len-1] : -1;
};
