/**
 * @author Joel Kenneth Fredericks <joel.fredericks@kurtosys.com>
 * 
 * sumValues(obj) Recursively adds the 'total' attribute in obj
 * @param {obj} The nested array to be summmed
 * @returns {sum} The sum of all the 'total' attributes
 * 
 * Link to problem: https://kurtosys-prod-eng.atlassian.net/wiki/spaces/GRAD/pages/223839039/Challenge+6+-+Recursionexit
 * 
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