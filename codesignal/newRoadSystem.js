// Once upon a time, in a kingdom far, far away, there lived a King Byteasar I. As a kind and wise ruler, he did everything in his (unlimited) power to 
// make life for his subjects comfortable and pleasant. One cold evening a messenger arrived at the king's castle with the latest news: all kings in the 
// Kingdoms Union had started enforcing traffic laws! In order to not lose his membership in the Union, King Byteasar decided he must do the same within 
// his kingdom. But what would the citizens think of it?

// The king decided to start introducing the changes with something more or less simple: change all the roads in the kingdom from two-directional to 
// one-directional (one-way). He personally prepared the roadRegister of the new roads, and now he needs to make sure that the road system is convenient 
// and there will be no traffic jams, i.e. each city has the same number of incoming and outgoing roads. As the Hand of the King, you're the one who he 
// has decreed must check his calculations.

// Example

// For

// roadRegister = [[false, true,  false, false],
//                 [false, false, true,  false],
//                 [true,  false, false, true ],
//                 [false, false, true,  false]]

function newRoadSystem(matrix) {
    let graph = matrix.map((arr) => {
        return {
            incomingRoads: 0,
            outGoingRoads: 0
        }
    })
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j]) {
                graph[i].outGoingRoads++;
                graph[j].incomingRoads++;
            }
        }
    }

    for (let i = 0; i < graph.length; i++) {
        if (graph[i].incomingRoads !== graph[i].outGoingRoads) {
            return false;
        }
    }
    return true;
}
