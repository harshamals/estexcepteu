var arr = [4, 2, 7, 1, 3];
var sortedArr = node_sort(function(a, b) {
  return a - b;
})(arr);
console.log(sortedArr); // [1, 2, 3, 4, 7]
