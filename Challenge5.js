/**
 * @author Joel Kenneth Fredericks <joel.fredericks@kurtosys.com>
 * 
 * findChildren(santasList, children) compares two list and returns a new list with same elements from both lists
 * @param {santasList} Santa's List - Santa's list of children in array format
 * @param {children} Children list - The list of children to be checked.
 * @returns {newList} List containing every child who appeared on Santa's list.
 * 
 * Link to problem: https://kurtosys-prod-eng.atlassian.net/wiki/spaces/GRAD/pages/223740484/Challenge+5+-+Array+Merge
 */

let fs = require('fs');

let data1 = JSON.parse(fs.readFileSync('data1.json', 'utf8'));
let data2 = JSON.parse(fs.readFileSync('data2.json', 'utf8'));

console.log(data1);
console.log(data2);

/* let arr = [];

for (let index1 = 0; index1 < data1.length; index1++) {

    let shared = false;
    for (let index2 = 0; index2 < data2.length; index2++) {
        console.log(data2[index2]._id + " " + data1[index2]._id);
        if (data2[index2]._id == data1[index2]._id) {
            shared = true;
            break;
        }
        
    }
    if (!shared) {
        arr.push(data1[index1]);
    }
}
arr = arr.concat(data2); */