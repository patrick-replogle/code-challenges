/*
Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the 
password must be strong. The website considers a password to be strong if it satisfies the following criteria:

Its length is at least .
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+
*/

// first pass solution
function minimumNumber(n, password) {
    let charsToAdd = 0;
    let dict = {
        number: false,
        lower: false,
        upper: false,
        special: false
    }
    
    for (let char of password) {
        if (/[0-9]/.test(char)) dict['number'] = true;
        else if (/[a-z]/.test(char)) dict['lower'] = true;
        else if (/[A-Z]/.test(char)) dict['upper'] = true;
        else if (/[!@#$%^&*()-+]/.test(char)) dict['special'] = true;
    }
    if (!dict['number']) charsToAdd++;
    if (!dict['lower']) charsToAdd++;
    if (!dict['upper']) charsToAdd++;
    if (!dict['special']) charsToAdd++;
    
    if (password.length + charsToAdd < 6) {
        return  charsToAdd + (6 - (password.length + charsToAdd));
    }
    return charsToAdd;
}
