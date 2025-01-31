// function mincost(arr)
// { 
// //write your code here
// // return the min cost
  
// }

// module.exports=mincost;

function mincost(arr) {
    if (!arr.length) return 0;

    arr.sort((a, b) => a - b); // Sort initially
    let totalCost = 0;

    while (arr.length > 1) {
        let first = arr.shift();
        let second = arr.shift();
        let cost = first + second;
        totalCost += cost;
        arr.push(cost);
        arr.sort((a, b) => a - b); // Re-sort after every merge
    }

    return totalCost;
}

module.exports = mincost;

