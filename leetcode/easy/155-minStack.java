// solution 1
class MinStack {
    private ArrayList<Integer> stack;
    private ArrayList<Integer> min;
    
    public MinStack() {
        stack = new ArrayList<>();
        min = new ArrayList<>();
    }
    
    public void push(int val) {
        stack.add(val);
        if (min.size() == 0 || val <= min.get(min.size() - 1)) {
            min.add(val);
        }
    }
    
    public void pop() {
        if (stack.size() > 0) {
            int val = stack.get(stack.size() - 1);
            stack.remove(stack.size() - 1);
            if (val == min.get(min.size() - 1)) {
                min.remove(min.size() - 1);
            }
        }
    }
    
    public int top() {
        return stack.get(stack.size() - 1);
    }
    
    public int getMin() {
        return min.get(min.size() - 1);
    }
}

// solution 2
class StackEntry {
    int min;
    int value;
    
    public StackEntry(int min, int value) {
        this.min = min;
        this.value = value;
    }
}

class MinStack {
    Stack<StackEntry> stack;
    
    public MinStack() {
        this.stack = new Stack();
    }
    
    public void push(int val) {
        if (stack.isEmpty()) {
            stack.add(new StackEntry(val, val));
        } else {
            int currMin = stack.peek().min < val ? stack.peek().min : val;
            stack.add(new StackEntry(currMin, val)); 
        }
    }
    
    public void pop() {
        if (!stack.isEmpty()) stack.pop();
    }
    
    public int top() {
        if (!stack.isEmpty()) {
            return stack.peek().value;
        }
        return -1;
    }
    
    public int getMin() {
        if (!stack.isEmpty()) {
            return stack.peek().min;
        }
        return -1;
    }
}

