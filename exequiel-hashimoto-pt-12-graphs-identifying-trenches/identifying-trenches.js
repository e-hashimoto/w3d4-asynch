function findTrench(matrix) {
    let trench = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] < trench) {
                trench = matrix[i][j];
            }
        }
    }
    return trench;
}

function findStart(matrix) {
    let starts = [];

    // Top Row
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] < -5) {
            starts.push([0, i])
        }
    }

    // Bottom Row
    for (let i = 0; i < matrix[matrix.length -1].length; i++) {
        if (matrix[matrix.length - 1][i] < -5) {
            starts.push([matrix.length - 1, i])
        }
    }

    // Left except first and last
    for (let i = 1; i < matrix.length-1; i++) {
        if (matrix[i][0] < -5) {
            starts.push([i,0])
        }
    }

    // Right except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][matrix[0].length -1] < -5) {
            starts.push([i, matrix[0].length - 1]);
        }
    }

    return starts;
}

function findNeighbors(node, matrix) {
    // Your code here
    const [row, col] = node;
    const neighbors = [
        [row - 1, col], // Up
        [row + 1, col], // Down
        [row, col+1], // Right
        [row, col -1] // Left
    ]

    const currentDepth = matrix[row][col];

    return neighbors.filter(currentNode => {
        const [currentRow, currentCol] = currentNode;
        return matrix[currentRow] && matrix[currentRow][currentCol]
            && matrix[currentRow][currentCol] < -5;
    });
}

function trenchTraversal(node, matrix, visited) {
    // Don't bother traversing if it is to shallow

    // Traverse the potential trench to count it's length
    // Your code here
    const stack = [node];
    visited.add(node.toString());
    let length = 0;

    while(stack.length) {
        const currentNode = stack.pop();
        const [currentRow, currentCol] = currentNode;

        // if ([currentRow, currentCol] === -5) return false; why you no work?!?!?!?!

        if (length >= 3) return true;

        if (matrix[currentRow][currentCol] < -5) {
            length++;
        }

        if (matrix[currentRow][currentCol] &&
            matrix[currentRow][currentCol+1] &&
            matrix[currentRow][currentCol+2] &&
            matrix[currentRow+1][currentCol+2] &&
            matrix[currentRow-1][currentCol+2] < -5)
            return false;

        const neighbors = findNeighbors(currentNode, matrix);
        for (let neighbor of neighbors) {
            let str = neighbor.toString();
            if(!visited.has(str)) {
                visited.add(str);
                stack.push(neighbor);
            }
        }

        // if (matrix[currentRow][currentCol] &&
        //     matrix[currentRow][currentCol+1] &&
        //     matrix[currentRow][currentCol+2] &&
        //     matrix[currentRow+1][currentCol+2] &&
        //     matrix[currentRow-1][currentCol+2] < -5)
        //     return false;

        // if (length < 3) return false;
    }

    return false;
}

function identifyTrench(trenchMatrix) {
    // Start at 0,0 and attempt to traverse any unvisited nodes
    // Your code here
    const trench = findTrench(trenchMatrix);

    const starts = findStart(trenchMatrix);

    const visited = new Set();

    for (const node of starts) {
        if (trenchTraversal(node, matrix, visited)) return node;
    }

    return false;
}

// Uncomment for local testing

// // Example 0
// const sonar_0 = [
//     [-5, -5, -5],
//     [-6, -5, -8],
//     [-5, -7, -5]
// ]

// console.log(findNeighbors([1,1], sonar_0)) // => Expect [[2, 1], [1, 0], [1, 2]];

// // Example 1
// const sonar_1 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-8,-8,-9,-7],
//           [-5,-5,-5,-5,-8],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_1)) // <- Expect 'true'

// // Example 2
// const sonar_2 = [
//           [-5,-5,-5,-7,-5],
//           [-5,-8,-8,-9,-5],
//           [-5,-5,-5,-7,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_2)) // <- Expect 'false'

// // Example 3
// const sonar_3 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-5,-5,-5,-5],
//           [-5,-9,-9,-5,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_3)) // <- Expect 'false'


/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyTrench, findNeighbors, trenchTraversal];
