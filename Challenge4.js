/**
 * @author Joel Kenneth Fredericks <joel.fredericks@kurtosys.com>
 * 
 * findChildren(santasList, children) compares two list and returns a new list with same elements from both lists
 * @param {santasList} Santa's List - Santa's list of children in array format
 * @param {children} Children list - The list of children to be checked.
 * @returns {newList} List containing every child who appeared on Santa's list.
 * 
 * https://kurtosys-prod-eng.atlassian.net/wiki/spaces/GRAD/pages/223871631/Challenge+4+-+Indexing+Searching
 */


/* From https://www.consolelog.io/group-by-in-javascript */
Array.prototype.groupBy = function(prop) {
    return this.reduce(function(groups, item) {
        let val = item[prop];
        groups[val] = groups[val] || [];
        groups[val].push(item);
        return groups;
    }, {});
};

function orchestrateUsers(users) {
    let groupedUsers = users.groupBy("type");
    return groupedUsers;
}

function searchUsers(orchestratedUsers, userTypes, property, value) {
    let filteredUsers = orchestratedUsers.filter(orchestratedUsers.value);
    return filteredUsers;
}

let users = [
    {
        "name": "Joe",
        "companyId": "A2100",
        "type": "Admin"
    },
    {
        "name": "Jane",
        "companyId": "A2100",
        "type": "Moderator"
    },
    {
        "name": "Smith",
        "companyId": "A2100",
        "type": "User"
    },
    {
        "name": "Smith",
        "companyId": "A2100",
        "type": "User"
    },
    {
        "name": "Rocket",
        "companyId": "A3100",
        "type": "Admin"
    },
    {
        "name": "Rick",
        "companyId": "A3100",
        "type": "User"
    },
    {
        "name": "Tim",
        "companyId": "A4100",
        "type": "Admin"
    }
];

console.log(orchestrateUsers(users));
/*console.log(searchUsers(orchestrateUsers(users)));*/