//Merge Two Sorted List

// Merge two sorted linked lists and return it as a new sorted list. 
//The new list should be made by splicing together the nodes of the first two lists.

Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

//Solution 1
// var mergeTwoLists = function(l1, l2) {
//     let result = [...l1, ...l2];
//   return result.sort((a,b) => a-b);
// };





//Solution 2

var mergeTwoLists = (l1, l2) => {
    if(!l1 || !l2) return l1 || l2
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}

const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 2, 8, 15, 19];

console.log(mergeTwoLists(arr1, arr2));
