const findMatching = function (driverList, filterValue) {
    let matchingRecords = driverList.filter(driver => driver.toUpperCase() === filterValue.toUpperCase());
    return matchingRecords;
}

const fuzzyMatch = function (driverList , query) {
    let matchingRecords = driverList.filter(driver => driver.charAt(0) === query.charAt(0));
    return matchingRecords;
}

const matchName = function (driverList, query) {
    let matchingRecords = driverList.filter(driver => driver.name === query);
    return matchingRecords;
}
