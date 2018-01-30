/**
 * @author Joel Kenneth Fredericks <joel.fredericks@kurtosys.com>
 * 
 * findChildren(santasList, children) compares two list and returns a new list with same elements from both lists
 * @param {santasList} Santa's List - Santa's list of children in array format
 * @param {children} Children list - The list of children to be checked.
 * @returns {newList} List containing every child who appeared on Santa's list.
 * 
 * Link to problem: https://kurtosys-prod-eng.atlassian.net/wiki/spaces/GRAD/pages/223871621/Challenge+1+-+Santa+s+Naughty+List
 */

function compress(str) {
    var result,
    count = 1,
    i;

    if (!str) {
        return "";
    }

    result = str.charAt(0);
    for (i = 1; i < str.length; i++) {
        if (str.charAt(i) != str.charAt(i-1)) {
            result += count + str.charAt(i);
            count = 1;
        } else {
            count++;
        }
    }

    return result + count;
}

console.log("My method: " + compress("aabbbcccccaa"));

var res = 'aabbbcccccaa'
    .replace(/(.)\1*/g, function(m, $1) {
        return $1 + m.length;
    });
console.log("Using regex: " + res);