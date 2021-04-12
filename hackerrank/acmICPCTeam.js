/*
There are a number of people who will be attending ACM-ICPC World Finals. Each of them may be well versed in a number of topics. Given a list 
of topics known by each attendee, presented as binary strings, determine the maximum number of topics a 2-person team can know. Each subject 
has a column in the binary string, and a '1' means the subject is known while '0' means it is not. Also determine the number of teams that know 
the maximum number of topics. Return an integer array with two elements. The first is the maximum number of topics known, and the second is the 
number of teams that know that number of topics.
*/

// first pass solution
function acmTeam(topic) {
    let max = 0;
    let teams = 0;
    
    for (let i = 0; i < topic.length - 1; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let subjectCount = 0;
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    subjectCount++;
                }
            }
            if (subjectCount > max) {
                max = subjectCount;
                teams = 1;
            }
            else if (subjectCount === max) {
                teams++;
            }
        }
    }
    return [max, teams];
}
