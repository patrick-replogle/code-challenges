/*
A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer 
than some number of students are present when class starts. Arrival times go from on time () to arrived late ().
Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.
*/

// first pass solution
function angryProfessor(k, a) {
    let students = 0;
    
    for (let time of a) {
        if (time <= 0) students++;
    }
    return students >= k ? 'NO' : 'YES';
}
