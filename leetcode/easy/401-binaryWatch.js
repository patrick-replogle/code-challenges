/*
A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.

For example, the above binary watch reads "3:25".

Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

Example:
Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
*/

var readBinaryWatch = function(num) {
    let output = [];

    for (let hour = 0; hour < 12; hour++) {
        for (let minutes = 0; minutes < 60; minutes++) {
            let h = hour.toString(2).split('').filter(el => el === '1').length;
            let m = minutes.toString(2).split('').filter(el => el === '1').length;
            if (h + m === num) {
                output.push(`${hour}:${minutes < 10 ? '0' + minutes : minutes}`)
            }
        }
    }
    return output;
};
