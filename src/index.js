module.exports = function towelSort (matrix) {
	if (!Array.isArray(matrix)) return [];

  let arr = [];

  matrix.forEach(function(item, index, array) {
    item.sort(function(a, b) {return  (index % 2 === 0) ? a - b : b - a;});

    arr = arr.concat(item);
  })

  return arr;
}
