// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    let timeOfDay = s.substring(s.length - 2, s.length);
    let hours = s.substring(0, 2);

    if (timeOfDay === "PM" && hours === "12") {
        return str.substring(0, s.length - 2);
    } else if (timeOfDay === "PM" && hours !== "12") {
        return `${12 + Number(hours)}:${s.substring(3, 8)}`
    } else if (timeOfDay === "AM" && hours === "12"){
        return `00:${s.substring(3, 8)}`;
    } else {
        return s.substring(0, s.length - 2);
    }
}
