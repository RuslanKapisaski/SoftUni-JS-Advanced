// global scope
function add(a) {
  let state = 0;
  state += a;

  function sum(a) {
    state += a;
    return sum;
  }
  sum.toString = () => state;
  return sum;
}

console.log(add(1)(6)(-3).toString());
