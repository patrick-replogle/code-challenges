// first pass js solution
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    let filteredList = restaurants.filter(res => {
        if (veganFriendly && res[2] != 1) return false;
        if (res[3] > maxPrice) return false;
        if (res[4] > maxDistance) return false;
        return true;
    })
    
    return filteredList
        .sort((a, b) => b[1] == a[1] ? b[0] - a[0] : b[1] - a[1])
        .map(res => res[0]);
};
