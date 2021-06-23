// Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). 

// first pass solution
function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 < y2 || (y1 === y2 && m1 < m2)) {
        return 0;
    }
    else if (m1 === m2 && y1 === y2) {
        if (d1 > d2) return (d1 - d2) * 15;
        else return 0;
    }
    else if (y1 === y2 && m1 > m2) {
        return (m1 - m2) * 500;
    }
    return 10000;
}
