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

/* function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
}

function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + '' + obj[p];
        }
    }
    return str;
}

console.log(objToString(getFrequency("aabbbcccccaa")));

function compress(params) {
    let str = "";

    for (var i=0; i<params.length;i++) {

    }
}

function decompress(str) {
    return str.replace(/(\d+)([a-zA-A])/g, function (match, num, letter) {
        var ret = '', i;
        for (i = 0; i < parseInt(num, 10); i++) {
            ret += letter;
        }
        return ret;
    });
}

console.log(decompress("g2j2")); */

function compress(str) {
    let count = 1;
    let retStr = '';

    for (let index = 0; index < str.length; index++) {
        console.log("str.charAt(" + index + "): " + str.charAt(index) + "\tstr.charAt(" + parseInt(index + count) + "): " + str.charAt(index + count) + "\tcount: " + count);
        if (str.charAt(index) == str.charAt(index + count)) {
            count ++;
        }
        else {
            console.log("retStr before: " + retStr);
            retStr += str.charAt(index) + count;
            console.log("retStr after: " + retStr + "\n");
            count = 1;
        }
    }

    return retStr;
}

console.log(compress("aabbbcccccaa"));