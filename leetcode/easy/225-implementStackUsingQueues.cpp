class MyStack {
private:
    deque<int> queue1;
    deque<int> queue2;
public:
    MyStack() {
        
    }
    
    void push(int x) {
        queue1.push_back(x);
    }
    
    int pop() {
        while (queue1.size() > 1) {
            int top = queue1.front();
            queue1.pop_front();
            queue2.push_back(top);
        }

        int output = queue1.front();
        queue1.pop_front();

        while (!queue2.empty()) {
            int top = queue2.front();
            queue2.pop_front();
            queue1.push_back(top);
        }
        return output;
    }
    
    int top() {
        while (queue1.size() > 1) {
            int top = queue1.front();
            queue1.pop_front();
            queue2.push_back(top);
        }

        int output = queue1.front();
        queue1.pop_front();
        queue2.push_back(output);

        while (!queue2.empty()) {
            int top = queue2.front();
            queue2.pop_front();
            queue1.push_back(top);
        }
        return output;
    }
    
    bool empty() {
        return queue1.empty();
    }
};
