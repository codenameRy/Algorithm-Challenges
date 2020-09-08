//Valid Parenthesis

//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
    const stack = []
    const pairs = {
      '}': '{',
      ']': '[',
      ')': '(',
    }
    for (const c of s) {
      const open = pairs[c]
      if (open) {
        if (stack.pop() !== open) {
          return false
        }
      } else {
        stack.push(c)
      }
    }
    return stack.length <= 0
  };

console.log(isValid("()")); //True
console.log(isValid("(]")); //False
console.log(isValid("([)]")); //False

//Solution 2

var isValid2 = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};

console.log(isValid2("()")); //True
console.log(isValid2("(]")); //False
console.log(isValid2("([)]")); //False
