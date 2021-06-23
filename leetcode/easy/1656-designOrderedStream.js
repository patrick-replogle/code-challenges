/*
There is a stream of n (id, value) pairs arriving in an arbitrary order, where id is an integer between 1 and n and value is a string. 
No two pairs have the same id.

Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. 
The concatenation of all the chunks should result in a list of the sorted values.

Implement the OrderedStream class:

OrderedStream(int n) Constructs the stream to take n values.
String[] insert(int id, String value) Inserts the pair (id, value) into the stream, then returns the largest possible chunk of currently 
inserted values that appear next in the order.
 
Example:
Input
["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
[[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
Output
[null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]
*/

// first pass solution
class OrderedStream {
    constructor(n) {
        this.streams = new Array(n).fill(undefined);
        this.pointer = 0;
    }
    insert(id, value) {
        this.streams[id - 1] = value;
        let output = [];

        for (let i = this.pointer; i < this.streams.length; i++) {
            if (this.streams[i]) {
                output.push(this.streams[i]);
                this.pointer++;
            }
            else break;
        }
        return output;
    }
}
