/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;
    let value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.map.delete(key);
        this.map.set(key, value);
    } else {
        this.map.set(key, value);
        
        if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value);
        }
    }
};
