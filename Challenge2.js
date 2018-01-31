/**
 * @author Joel Kenneth Fredericks <joel.fredericks@kurtosys.com>
 * 
 * findChildren(santasList, children) compares two list and returns a new list with same elements from both lists
 * @param {santasList} Santa's List - Santa's list of children in array format
 * @param {children} Children list - The list of children to be checked.
 * @returns {newList} List containing every child who appeared on Santa's list.
 * 
 * Link to problem: https://kurtosys-prod-eng.atlassian.net/wiki/spaces/GRAD/pages/223937027/Challenge+2+-+Code+Breaking
 */

function compress(str) {
    let retStr,
    count = 1;

    retStr = str.charAt(0);
    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i) != str.charAt(i-1)) {
            retStr += count + str.charAt(i);
            count = 1;
        } else {
            count++;
        }
    }

    return retStr + count;
}

console.log("My method: " + compress("aabbbcccccaa"));

let res = 'aabbbcccccaa'
    .replace(/(.)\1*/g, function(m, $1) {
        return $1 + m.length;
    });
console.log("Using regex: " + res);

function decompress(str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        
        if(i % 2 == 0) {

            output += str.charAt(i).repeat(parseInt(str.charAt(i+1)));
        }
    }

    return output;
}

console.log("Decompressed: " + decompress(compress("aabbbcccccaa")));