function merge_sort(A){
    var middle = Math.floor(A.length / 2);
    var sorted = [];

    if (middle === 0){
        return A;
    }

    var part1 = merge_sort(A.slice(0,middle));
    var part2 = merge_sort(A.slice(middle));

    // actual merge
    var i = j = 0;
    while (i < part1.length && j < part2.length){
        if (part1[i] < part2[j]){
            sorted.push(part1[i]);
            i++;
        } else {
            sorted.push(part2[j]);
            j++;
        }
    }
    while ( i < part1.length ) {
        sorted.push(part1[i]);
        i++;
    }
    while ( j < part2.length ) {
        sorted.push(part2[j]);
        j++;
    }
    return sorted;
}

module.exports.merge_sort = merge_sort;

