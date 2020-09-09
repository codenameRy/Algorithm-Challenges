//Autocomplete

//Write an autocomplete class that returns all dictionary words with a given prefix.

// Example
// dict:   {"abc", "acd", "bcd", "def", "a", "aba"}
 
// prefix: "a" -> "abc", "acd", "a", "aba"
// prefix: "b" -> "bcd"

dict = ["abc", "acd", "bcd", "def", "a", "aba"];
prefixA = "a";
prefixB = "b";

//Solution 1
function autoComplete(Arr, Input) {
    return Arr.filter(e =>e.toLowerCase().includes(Input.toLowerCase()));
}

console.log(autoComplete(dict, prefixA));
console.log(autoComplete(dict, prefixB));

//Solution 2
//  function autoComplete(inputValue, list) { 
//     document.getElementById('datalist').innerHTML = ''; 
//      //setting datalist empty at the start of function 
//      //if we skip this step, same name will be repeated 
       
//      l=value.length; 
//      //input query length 
//  for (var i = 0; i<n; i++) { 
//      if(tags[i].toLowerCase()).indexOf(value.toLowerCase()>-1) 
//      { 
//          //comparing if input string is existing in tags[i] string 

//          var node = document.createElement("option"); 
//          var val = document.createTextNode(tags[i]); 
//           node.appendChild(val); 

//            document.getElementById("datalist").appendChild(node); 
//                //creating and appending new elements in data list 
//          } 
//      } 
//  } 

function autoComplete2(inputValue, arr) {
    for ( let i = 0; i < arr.length; i++) {
        if(arr[i][i].toLowerCase().indexOf(value.toLowerCase()) > -1) {
            
        }
    }
}