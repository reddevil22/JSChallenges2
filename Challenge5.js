/**
 * @author Joel Kenneth Fredericks <joel.fredericks@kurtosys.com>
 * 
 * mergeTwoArrays(arr1, arr2) merges 2 array of objects based on '_id' key and returns a new array
 * @param {arr1} First array to be merged
 * @param {arr2} Second array to be merged
 * @returns {merged} New array containing merged objects
 * 
 * Link to problem: https://kurtosys-prod-eng.atlassian.net/wiki/spaces/GRAD/pages/223740484/Challenge+5+-+Array+Merge
 */

function mergeTwoArrays(arr1, arr2) {
    let merged = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i]._id == arr2[j]._id) {
                merged.push(Object.assign(arr1[i], arr2[j]));
            }
        }
    }

    return merged;
}

let fs = require('fs');

let data1 = JSON.parse(fs.readFileSync('data1.json', 'utf8'));
let data2 = JSON.parse(fs.readFileSync('data2.json', 'utf8'));

console.log(mergeTwoArrays(data1, data2));