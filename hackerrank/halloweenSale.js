/*
You wish to buy video games from the famous online video game store Mist.

Usually, all games are sold at the same price,  dollars. However, they are planning to have the seasonal Halloween Sale next month in 
which you can buy games at a cheaper price. Specifically, the first game will cost k dollars, and every subsequent game will cost d dollars 
less than the previous one. This continues until the cost becomes less than or equal to m dollars, after which every game will cost  dollars. 
How many games can you buy during the Halloween Sale?
*/

// first pass solution
function howManyGames(p, d, m, s) {
    let games = 0;
    let currGameCost = p;
    
    while (s - currGameCost >= 0) {
        games++;
        s -= currGameCost;
        if (currGameCost - d >= m) {
            currGameCost -= d;
        } else {
           currGameCost = m; 
        }
    }
    return games;
}
