class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(head = null) {
        this.head = head;
        this.tail = null;
        this.size = this.head ? 1 : 0;
    }
    enqueue(val) {
        if (!this.head) {
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            let nextTail = new Node(val);
            this.tail.next = nextTail;
            this.tail = nextTail;
        }
        this.size++;
    }
    dequeue() {
        if (!this.head.next) {
            let output = this.head;
            this.head = null;
            this.tail = null;
            return output;
        } else {
            let output = this.head;
            this.head = this.head.next;
            output.next = null;
            return output;
        }
        this.size--;
    }
    isEmpty() {
        return this.size <= 0;
    }
}

function minimumMoves(grid, startX, startY, goalX, goalY) {
    let queue = new Queue();
    let visited = new Set();
    
    queue.enqueue([startX, startY, 0]);
    
    while (!queue.isEmpty()) {
        let [x, y, turns] = queue.dequeue().val;
        
        if (x === goalX && y === goalY) return turns;
        
        let key = x + ":" + y;
        
        if (!visited.has(key)) {
            visited.add(key);
            
            for (let i = x; i < grid.length; i++) {
                if (grid[i][y] === 'X') break;
                queue.enqueue([i, y, turns + 1]);
            }
            for (let i = x; i >= 0; i--) {
                if (grid[i][y] === 'X') break;
                queue.enqueue([i, y, turns + 1]);
            }
            
            for (let j = y; j < grid[0].length; j++) {
                if (grid[x][j] === 'X') break;
                queue.enqueue([x, j, turns + 1]);
            }
            
            for (let j = y; j >= 0; j--) {
                if (grid[x][j] === 'X') break;
                queue.enqueue([x, j, turns + 1]);
            }
        }
    }
    return -1;
}
