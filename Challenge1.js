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

function findChildren(santasList, children) {
    let newList = [];
    for (let index = 0; index < santasList.length; index++) {
        if (children.includes(santasList[index])) {  // Check if children array includes element of santasList at position 'index'
            newList.push(santasList[index]);         // Adds element to new array if found in children and santasList
        }
    }
    return newList.sort();
}

let santasList = ["Tom","Errol","Sam","Peter","Jennifer"];
let children = ["Errol", "Peter", "Jennifer"];

console.log(findChildren(santasList, children));

santasList = ["Tom","Errol","Sam", "mistyMay","Peter","Jennifer", "macMerphy"];
children = ["Errol", "Peter", "jennifer", "mistymay", "MacMerphy"];

console.log(findChildren(santasList, children));