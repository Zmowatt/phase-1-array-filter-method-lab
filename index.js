function findMatching(drivers, choice) {
    const lowerCaseChoice = choice.toLowerCase();

    return drivers.filter(driver => driver.toLowerCase() === lowerCaseChoice);
}


function fuzzyMatch(drivers, firstLetter) {
    const lowerCaseLetter = firstLetter.toLowerCase();

    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerCaseLetter));
}


function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name) ;  
}