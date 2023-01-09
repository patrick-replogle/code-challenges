class Solution {
public:
    string categorizeBox(int length, int width, int height, int mass) {
        int dimensionCap = pow(10, 4);
        int volumeCap = pow(10, 9);
        int arr[] = {length, width, height};
        long long volume = (long long) length * (long long) width * (long long) height;
        bool isHeavy = mass >= 100;
        bool isBulky = volume >= volumeCap;

        for (const auto& num : arr) {
            if (num >= dimensionCap) isBulky = true;
        }

        if (isHeavy && isBulky) return "Both";
        if (!isHeavy && !isBulky) return "Neither";
        if (!isHeavy && isBulky) return "Bulky";
        if (isHeavy && !isBulky) return "Heavy";
        return "";
    }
};
