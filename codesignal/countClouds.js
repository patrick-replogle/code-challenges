/*
Given a 2D grid skyMap composed of '1's (clouds) and '0's (clear sky), count the number of clouds. A cloud is surrounded by clear sky, and 
is formed by connecting adjacent clouds horizontally or vertically. You can assume that all four edges of the skyMap are surrounded by clear sky.

Example

For

skyMap = [['0', '1', '1', '0', '1'],
          ['0', '1', '1', '1', '1'],
          ['0', '0', '0', '0', '1'],
          ['1', '0', '0', '1', '1']]
the output should be
countClouds(skyMap) = 2;

For

skyMap = [['0', '1', '0', '0', '1'],
          ['1', '1', '0', '0', '0'],
          ['0', '0', '1', '0', '1'],
          ['0', '0', '1', '1', '0'],
          ['1', '0', '1', '1', '0']]
the output should be
countClouds(skyMap) = 5.
*/

// first pass solution
function countClouds(skyMap) {
    let clouds = 0;
    
    for (let i = 0; i < skyMap.length; i++) {
        for (let j = 0; j < skyMap[0].length; j++) {
            if (skyMap[i][j] === '1') {
                dft(skyMap, i, j);
                clouds++;
            }
        }
    }
    return clouds;
}

function dft(skyMap, i, j) {
    if (i < 0 || i > skyMap.length - 1 || j < 0 || j > skyMap[0].length - 1) return;
    if (skyMap[i][j] !== '1') return;
    
    skyMap[i][j] = '#'; // mark as visited
    
    dft(skyMap, i+1, j); // north
    dft(skyMap, i-1, j); // south
    dft(skyMap, i, j-1); // west
    dft(skyMap, i, j+1); // east
}
