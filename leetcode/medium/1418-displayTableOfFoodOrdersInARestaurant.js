/*
Given the array orders, which represents the orders that customers have done in a restaurant. More specifically 
orders[i]=[customerNamei,tableNumberi,foodItemi] where customerNamei is the name of the customer, tableNumberi is the 
table customer sit at, and foodItemi is the item customer orders.

Return the restaurant's “display table”. The “display table” is a table whose row entries denote how many of each food 
item each table ordered. The first column is the table number and the remaining columns correspond to each food item in alphabetical order. 
The first row should be a header whose first column is “Table”, followed by the names of the food items. Note that the customer names are not part of the table. Additionally, the rows should be sorted in numerically increasing order.

Example 1:
Input: orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],
["Rous","3","Ceviche"]]
Output: [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]] 
Explanation:
The displaying table looks like:
Table,Beef Burrito,Ceviche,Fried Chicken,Water
3    ,0           ,2      ,1            ,0
5    ,0           ,1      ,0            ,1
10   ,1           ,0      ,0            ,0
For the table 3: David orders "Ceviche" and "Fried Chicken", and Rous orders "Ceviche".
For the table 5: Carla orders "Water" and "Ceviche".
For the table 10: Corina orders "Beef Burrito". 
*/

// first pass solution
var displayTable = function(orders) {
    let output = [];
    let topRow = [];
    let dict = {};
    
    for (let arr of orders) {
        if (!topRow.includes(arr[2])) {
            topRow.push(arr[2]); // create top row of dish names
        }
    }
    
    topRow.sort(); // sort top row alphabetically by dish name
    
    for (let arr of orders) {
        if (!(arr[1] in dict)) {
            dict[arr[1]] = new Array(topRow.length).fill(0); // create array to store quantities of dishes ordered per table
        }
        let index = topRow.indexOf(arr[2]); // find index of dishname in topRow
        dict[arr[1]][index] += 1; // increment quantity of each dish ordered for each table
    }
    
    topRow.unshift('Table');
    output.push(topRow);
    
    for (let key in dict) {
        let nextRow = [key]
        for (let dish of dict[key]) {
            nextRow.push(String(dish)); // answer wants stringified quantities
        }
        output.push(nextRow);
    }
    
    return output;
};
