// top down
class Solution {
public:
    int climbStairs(int n) {
        map<int, int> m;

        return climbStairs(n, m);
    }

    int climbStairs(int n, map<int, int>& m) {
        if (n < 0) return 0;
        if (n == 0) return 1;
        if (m.find(n) != m.end()) return m[n];

        m[n] = climbStairs(n - 1, m) + climbStairs(n - 2, m);

        return m[n];
    }
};

// bottom up
class Solution {
public:
    int climbStairs(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;

        int prevPrev = 1;
        int prev = 2;

        for (int i = 3; i <= n; i++) {
            int next = prevPrev + prev;
            prevPrev = prev;
            prev = next;
        }

        return prev;
    } 
};

