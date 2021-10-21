function incorrectPasscodeAttempts(passcode, attempts) {
    let consecutiveFailedAttempts = 0;
    
    for (let attempt of attempts) {
        if (attempt !== passcode) {
           consecutiveFailedAttempts++; 
        } else {
            consecutiveFailedAttempts = 0;
        }
        if (consecutiveFailedAttempts === 10) break;
    }
    return consecutiveFailedAttempts === 10;
}
