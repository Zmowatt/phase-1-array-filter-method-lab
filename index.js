function findMatching(driverArray, driverChoice) {
   return driverArray.filter(driver => driver.toLowerCase() === driverChoice.toLowerCase())
}

function fuzzyMatch(driverArray, firstLetters) {
    return driverArray.filter(driver => driver.toLowerCase().startsWith(firstLetters.toLowerCase()))
}

function matchName(driverArray, choice) {
    return driverArray.filter(driver => driver.name === choice)}