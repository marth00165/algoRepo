const evenBrackets = (str) => {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    if (str.length === 0) {
        return true;
    }

    for (let i = 0; i< str.length; i++) {
        let current = str[i];
        if (current in map){
            stack.push(current);
        } else {
            let bracket = stack.pop();
            if (current !== map[bracket]) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }

    return true;
}


console.log(evenBrackets("()")); // true
console.log(evenBrackets("()[]{}")); // true
console.log(evenBrackets("(]")); // false
console.log(evenBrackets("([)]")); // false
console.log(evenBrackets("{[]}")); // true
console.log(evenBrackets("")); // true (empty string)
console.log(evenBrackets("(")); // false (single unclosed bracket)
console.log(evenBrackets(")")); // false (single unopened bracket)
console.log(evenBrackets("(((")); // false (multiple unclosed brackets)
console.log(evenBrackets("[[[[]]]]")); // true (nested balanced brackets)
console.log(evenBrackets("([{}])")); // true (balanced nested)
console.log(evenBrackets("([{])")); // false (incorrectly nested)
console.log(evenBrackets("{[()]}")); // true (complex but balanced)
