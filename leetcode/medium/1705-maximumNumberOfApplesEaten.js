/*
There is a special kind of apple tree that grows apples every day for n days. On the ith day, the tree grows apples[i] apples that will rot 
after days[i] days, that is on day i + days[i] the apples will be rotten and cannot be eaten. On some days, the apple tree does not grow any 
apples, which are denoted by apples[i] == 0 and days[i] == 0.

You decided to eat at most one apple a day (to keep the doctors away). Note that you can keep eating after the first n days.

Given two integer arrays days and apples of length n, return the maximum number of apples you can eat.


Example 1:
Input: apples = [1,2,3,5,2], days = [3,2,1,4,2]
Output: 7
Explanation: You can eat 7 apples:
- On the first day, you eat an apple that grew on the first day.
- On the second day, you eat an apple that grew on the second day.
- On the third day, you eat an apple that grew on the second day. After this day, the apples that grew on the third day rot.
- On the fourth to the seventh days, you eat apples that grew on the fourth day.
*/

// first pass solution => very slow, but pass all the tests
var eatenApples = function(apples, days) {
    let eaten = 0;
    let day = 0;
    let arr = [];
    
    for (let i = 0; i < apples.length; i++) {
        if (apples[i] > 0) {
            arr.push({ start: i, expire: days[i] + i, count: apples[i] });
        }
    }
    
    while (true) {
        let soonest = Infinity; // always eat apples that will expire soonest
        let index = null; // index of edible apples that will expire soonest
        let i = 0;
        let flag = false;
        
        while (i < arr.length) {
            let obj = arr[i];
            
            if (obj['expire'] <= day || obj['count'] === 0) {
                arr.splice(i, 1);
                continue;
            }
            else if (day >= obj['start'] && obj['expire'] < soonest) {
                soonest = obj['expire'];
                index = i;
                flag = true;
            }
            i++;
        }
        if (flag) {
            eaten++;
            arr[index]['count']--; // edible apples are still available

        } 
        else if (day > apples.length){
            break; // all old apples have expired and we are unable to get new apples
        }
        day++;
    }
    return eaten;
};

// second pass solution => sorting array by expiration date speeds up algorthim a bit
var eatenApples = function(apples, days) {
    let eaten = 0;
    let day = 0;
    let arr = [];
    let max = 0;
    
    for (let i = 0; i < apples.length; i++) {
        if (apples[i] > 0) {
            arr.push({ start: i, expire: days[i] + i, count: apples[i] });
        }
        max = Math.max(max, i + days[i]);
    }
    
    arr.sort((a, b) => a['expire'] - b['expire']);
    
    while (day <= max) {
        let soonest = Infinity; // always eat apples that will expire soonest
        let index = null; // index of edible apples that will expire soonest
        let i = 0;
        let flag = false;
        
        while (i < arr.length) {
            let obj = arr[i];
            
            if (obj['expire'] <= day || obj['count'] === 0) {
                arr.splice(i, 1);
                continue;
            }
            else if (day >= obj['start'] && obj['expire'] < soonest) {
                eaten++;
                arr[i]['count']--;
                flag = true;
                break;
            }
            i++;
        }
        if (!flag && day > apples.length) break;
        day++;
    }
    return eaten;
};
