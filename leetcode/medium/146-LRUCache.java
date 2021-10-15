// first pass solution
class Node {
    Node prev = null;
    Node next = null;
    int val;
    int key;
    
    public Node(int key, int val) {
        this.key = key;
        this.val = val;
    }
}

class DLL {
    Node head = null;
    Node tail = null;
    int len = 0;
    
    public DLL() {}
    
    public Node addToTail(int key, int val) {
        Node newNode = new Node(key, val);
        
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.len++;
        
        return this.tail;
    }
    
    public Node moveToTail(Node node) {
        if (node == this.tail) return this.tail;
        else if (node == this.head) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        
        return this.tail;
    }
    
    public Node remove() {
        Node node = this.head;
        
        if (node == null) {
            return null;
        } 
        else if (this.head.next == null) {
            this.head = null;
            this.tail = null;
        } 
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.len--;
        
        return node;
    }
}

class LRUCache {
    int capacity;
    HashMap<Integer, Node> map = new HashMap<>();
    DLL cache = new DLL();
    

    public LRUCache(int capacity) {
        this.capacity = capacity;
    }
    
    public int get(int key) {      
        if (!this.map.containsKey(key)) return -1;

        Node node = this.map.get(key);
        node = this.cache.moveToTail(node);
        map.put(key, node);
        return node.val;
    }
    
    public void put(int key, int value) {
        if (this.map.containsKey(key)) {
            Node node = map.get(key);
            node = this.cache.moveToTail(node);
            node.val = value;
            map.put(key, node);
        } else {
            Node node = this.cache.addToTail(key, value);
            this.map.put(key, node);
            if (this.cache.len > this.capacity) {
                Node removedNode = this.cache.remove();
                this.map.remove(removedNode.key);
            }
        }
    }
}

// second pass solution
class LRUCache {
    int capacity;
    HashMap<Integer, Integer> map;
    

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new LinkedHashMap<>();
    }
    
    public int get(int key) {      
        if (!this.map.containsKey(key)) return -1;
        
        int value = this.map.remove(key);

        map.put(key, value);
        
        return value;
    }
    
    public void put(int key, int value) {
        if (this.map.containsKey(key)) {
            this.map.remove(key);
            this.map.put(key, value);
        } else {
            map.put(key, value);
            if (this.map.size() > this.capacity) {
                Iterator<?> iterator = this.map.entrySet().iterator();
                iterator.next();
                iterator.remove();
            }
        }
    }
}
