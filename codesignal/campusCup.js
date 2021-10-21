function campusCup(emails) {
    let map = {};
    
    for (let email of emails) {
        let [name, domain] = email.split('@');
        
        if (!(domain in map)) {
            map[domain] = [0, 0];
        }
        map[domain][0] += 20;
      
        addBonusData(map, domain);
    }

    return Object.entries(map)
        .sort((a, b) => 
            a[1][1] !== b[1][1] ? 
                b[1][1] - a[1][1] : a[0].localeCompare(b[0]))
        .map(school => school[0]);
}

function addBonusData(map, domain) {
    if (map[domain][0] === 100) map[domain][1] += 3;
    else if (map[domain][0] === 200) map[domain][1] += 8;
    else if (map[domain][0] === 300) map[domain][1] += 15;
    if (map[domain][0] === 500) map[domain][1] += 25;
}
