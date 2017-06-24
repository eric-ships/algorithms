/**
 * @param  {Number[]} arr
 * @param  {Number}   x
 * @return {Number}   index, -1 if not found
 */
function binarySearch(arr, x) {
    let lowerBound = 0
    let upperBound = arr.length - 1

    while (lowerBound <= upperBound) {
        const currIndex = (lowerBound + upperBound) / 2 | 0
        const curr = arr[currIndex]

        if (curr === x) return currIndex

        if (curr < x) {
            lowerBound = currIndex + 1
        } else {
            upperBound = currIndex - 1
        }
    }

    return -1
}
