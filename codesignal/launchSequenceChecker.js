function launchSequenceChecker(systemNames, stepNumbers) {
    const map = {};
    
    for (let i = 0; i < systemNames.length; i++) {
        let name = systemNames[i];
        
        if (!(name in map)) {
            map[name] = [];
        }
        map[name].push(stepNumbers[i]);
    }
    
    for (let key in map) {
        for (let i = 1; i < map[key].length; i++) {
            if (map[key][i] <= map[key][i-1]) return false;
        }
    }
    return true;
}
