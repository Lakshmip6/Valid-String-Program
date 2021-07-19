function isValidParentheseString(s) {
  let length = s.length;
    let array = s.split('');
    if (length == 0) return true;
    let stack = [];
    for (let i = 0; i < length; i++) {
      if (array[i] == '(' || array[i] == '{' || array[i] == '[') {
        stack.push(array[i]);
      }
      if (array[i] == ')' || array[i] == '}' || array[i] == ']') {
        if (!stack.length) return false;
        let temp = stack.pop();
        if ((temp == '(' && array[i] == ')') || (temp == '{' && array[i] == '}') || (temp == '[' && array[i] == ']')) {
          continue;
        } else {
          return false;
        }
      }
    }
    if (stack.length) return false;
    return true;
 }
 
 module.exports = isValidParentheseString;