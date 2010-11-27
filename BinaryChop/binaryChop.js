function BinaryChop(needle, haystack, minIndex, maxIndex)
{
    if(!haystack.length) {
        return -1;
    }

    if(typeof minIndex === 'undefined' && typeof maxIndex === 'undefined') {
        minIndex = 0;
        maxIndex = haystack.length - 1;
    }

    var middle = minIndex + Math.floor((maxIndex - minIndex)/2);
    if(needle === haystack[middle]) {
        return middle;
    } else if(maxIndex === minIndex) {
        return -1;
    } else if(needle < haystack[middle]) {
        return arguments.callee(needle, haystack, minIndex, middle);
    } else if(needle > haystack[middle]) {
        return arguments.callee(needle, haystack, middle + 1, maxIndex);
    }
};