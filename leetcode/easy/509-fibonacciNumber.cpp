// recursive solution
lass Solution {
public:
    int fib(int n) {
        if (n <= 1) return n;

        return fib(n-1) + fib(n-2);
    }
};

// iterative solution
class Solution {
public:
    int fib(int n) {
        if (n == 0) return 0;
        if (n <= 2) return 1;

        int prevPrev = 1;
        int prev = 1;

        for (int i = 3; i <= n; i++) {
            int next = prevPrev + prev;
            prevPrev = prev;
            prev = next;
        }

        return prev;
    }
};
