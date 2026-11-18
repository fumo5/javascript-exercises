const removeFromArray = function(arr, ...numsToRemove) {
    return arr.filter(item => !numsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
