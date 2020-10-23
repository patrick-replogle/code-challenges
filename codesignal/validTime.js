// Check if the given string is a correct time representation of the 24-hour clock.

// Example

// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.

function validTime(time) {
    time = time.split(":");

    if (time[0] > 23 || time[1] > 59) {
        return false;
    } else {
        return true;
    }
}
