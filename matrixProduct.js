//Matrix Product

/*Given a matrix, find the path from top left to bottom right 
with the greatest product by moving only down and right.*/
//Example 1
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]

// 1 -> 4 -> 7 -> 8 -> 9
// 2016

//Example 2
// [-1, 2, 3]
// [4, 5, -6]
// [7, 8, 9]

// -1 -> 4 -> 5 -> -6 -> 9
// 1080

var numberOfPaths = function (m, n) {
    if (m == 1 || n == 1) {
        return 1;
    } return (m - 1, n) + (m, n - 1);
}

let m = 2;
let n = 2;

console.log(numberOfPaths(m, n));

//Solution 2

var minPathProduct = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var sum = [];
    sum[0] = [grid[0][0]];

    // Calculate the distance travelled within the first column
    // This is because each square depends on the one above
	// And the one to the left. However there is nothing left
	// of the first column so we can calculate it by adding
	// the current square to the square above it
    for (var i = 1; i < m; i++) {
        sum[i] = [sum[i - 1][0] * grid[i][0]];
    }

    // The same goes for the first row. There is nothing above the 
	// first row. So we just calculate the distance by what is to the left
	// of it
    for (var j = 1; j < n; j++) {
        sum[0][j] = sum[0][j - 1] * grid[0][j];
    }

    // Start one row and one column in because we've precomputed
    // those above
    // The distance to the grid at i,j is equal to itself plus the minimum
	// of the two grid spaces (one above, one to the left)
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            sum[i][j] = Math.max(sum[i - 1][j], sum[i][j - 1]) * grid[i][j];
        }
    }
    // Return the distance bottom right corner
    return sum[m - 1][n - 1];
};

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];

let matrix2 = [
    [-1, 2, 3],
    [4, 5, -6],
    [7, 8, 9]
    ];

let matrix3 = [
    [1,3,1],
    [1,5,1],
    [4,2,1]];

console.log(minPathProduct(matrix1));
console.log(minPathProduct(matrix2));
console.log(minPathProduct(matrix3))
