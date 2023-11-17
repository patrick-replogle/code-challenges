const nearestExit = function(maze, entrance) {
    return bfs(maze, entrance);
};

const bfs = function(maze, entrance) {
    const moves = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    const visitedMaze = maze.map((row) => row.map(() => false))
    const queue = new Q()
    queue.enqueue([...entrance, 0]) 

    while (!queue.isEmpty()) {
        const [currRow, currCol, currStep] = queue.dequeue().value;

        if (isValidPath(maze, currRow, currCol, currStep)) {
            return currStep;
        }

        if (visitedMaze[currRow][currCol]) continue;

        visitedMaze[currRow][currCol] = true;

        for (let [y, x] of moves) {
            const nextRow = currRow + y;
            const nextCol = currCol + x;
         
            if (isValidMove(maze, visitedMaze, nextRow, nextCol)) {
                queue.enqueue([nextRow, nextCol, currStep + 1]);
            }
        }
    }

    return -1;
}

const isValidMove = function(maze, visitedMaze, nextRow, nextCol) {
    if (nextRow < 0 || nextRow > maze.length - 1) return false;
    if (nextCol < 0 || nextCol > maze[0].length - 1) return false;
    if (maze[nextRow][nextCol] !== '.') return false;
    if (visitedMaze[nextRow][nextCol]) return false;
    return true;
}

const isValidPath = function(maze, currRow, currCol, currStep) {
    return currStep > 0 && 
        ((currCol === 0 || currCol === maze[currRow].length - 1) ||  
        (currRow === 0 || currRow === maze.length - 1));
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

/** named Q since leetcode must already have a Queue class under the hood clashing in the namespace */
class Q {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }
    dequeue() {
        if (!this.isEmpty()) {
            const head = this.head;
            this.head = head.next;
            head.next = null;
            this.length--;

            if (this.length === 0) {
                this.tail = null;
            }
            return head;
        } 
    }
    isEmpty() {
        return this.length === 0;
    }
}



