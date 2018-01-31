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

let fs = require('fs');

let data = JSON.parse(fs.readFileSync('recursionData.json', 'utf8'));

//console.log(data);

let sum = 0;
function sumValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            sumValues(obj[key]);
        } 
        else {
            //console.log(obj[key]);
            sum += obj[key];
        }
    }
    return sum;
}

console.log("Sum of the recursive dive: " + sumValues(data));