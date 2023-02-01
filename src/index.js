module.exports = function check(str, bracketsConfig) {
  const pairBrackets = bracketsConfig.join();
  console.log(pairBrackets);
  let seven = 0;
  let eight = 0;
  let line = 0;
  const stack = [];
  for (let symbol of str) {
    if (symbol === '(' || symbol === '[' || symbol === '{' || symbol === '1' || symbol === '3' || symbol === '5') 
    stack.push(symbol);
    if (symbol === ')' || symbol === ']' || symbol === '}' || symbol === '2' || symbol === '4' || symbol === '6') {
      if (stack.length === 0) return false
      else stack.pop();
    }
  }
  if (stack.length === 0) return true
  else return false;
}