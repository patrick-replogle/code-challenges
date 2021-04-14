// Given the time in numerals, convert it into words

function timeInWords(h, m) {
    let times = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", 
                 "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", 
                 "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine" ];
    
    if (m === 0) return `${times[h]} o' clock`;
    else if (m === 15) return `quarter past ${times[h]}`;
    else if (m === 30) return `half past ${times[h]}`;
    else if (m === 45) return `quarter to ${times[h + 1]}`;
    else if (m === 1) return `${times[m]} minute past ${times[h]}`;
    else if (m < 30) return `${times[m]} minutes past ${times[h]}`;
    else if (m > 30) return `${times[60 - m]} minutes to ${times[h + 1]}`;
}
