class Solution {
public:
    long long pickGifts(vector<int>& gifts, int k) {
        int index = -1;
        int largest = -1;
        long long output = 0;

        while (k > 0) {
            for (int i = 0; i < gifts.size(); i++) {
                if (gifts[i] > largest && gifts[i] > 1) {
                    largest = gifts[i];
                    index = i;
                }
            } 

            if (largest == -1) break;
            int next = floor(sqrt(largest));
            gifts[index] = next;
            largest = -1;
            index = -1;
            k--;
        }


        for (const auto gift: gifts) {
            output += gift;
        }

        return output;
    }
};
