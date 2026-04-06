var mergeTwoArrays = function(array1, array2) {
    let i = 0;
    let j = 0;
    let curr1 = array1[i];
    let curr2 = array2[j];
    let array3 = [];
    while (i < array1.length && j < array2.length) {
        if (curr1 < curr2) {
            array3.push(curr1);
            i++;
            curr1 = array1[i];
        } else {
            array3.push(curr2);
            j++;
            curr2 = array2[j];
        }
    }

    while (i < array1.length) {
        array3.push(curr1);
        i++;
        curr1 = array1[i];
    }
    while (j < array2.length) {
        array3.push(curr2);
        j++;
        curr2 = array2[j];
    }
    return array3;
};

console.log(mergeTwoArrays([1,2,4],[1,3,4]));
