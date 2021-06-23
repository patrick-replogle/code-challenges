// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
// Examples

// round to  (85 - 84 is less than 3)
// do not round (result is less than 40)
// do not round (60 - 57 is 3 or higher)

function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] % 5 !== 0 && grades[i] >= 38) {
            let j = grades[i] + 1;
            while (j % 5 !== 0) j++;
            if (j - grades[i] < 3) grades[i] = j;
        }
    }
    return grades;
}
