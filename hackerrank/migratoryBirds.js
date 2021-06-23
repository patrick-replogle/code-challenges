// You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be 
// identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You 
// would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that 
// bird and if two or more types of birds are equally common, choose the type with the smallest ID number.

// For example, assume your bird sightings are of types . There are two each of types arr = [1, 1, 2, 2, 3] 1 and 2, and one sighting of type . Pick the lower of the 
// two types seen twice: type 1.

function migratoryBirds(arr) {
    let dict = {};
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in dict)) {
            dict[arr[i]] = 0;
        }
        dict[arr[i]] += 1;
        if (dict[arr[i]] > max) {
            max = Math.max(max, dict[arr[i]]);
        }
    }

    for (let key in dict) {
        if (dict[key] === max && key < min) {
            min = Math.min(min, key);
        } 
    }
    return min;
}
