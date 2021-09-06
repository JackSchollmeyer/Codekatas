//The following function takes the alphabetically first string in an array
//and returns it with 3 staras between each letter

function twoSort(s) {
    return s.sort().slice(0, 1).toString().split('').join('***')
    }