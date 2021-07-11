// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    console.log(getDistanceFruit(a, apples, s, t));

    console.log(getDistanceFruit(b, oranges, s, t));

}

function getDistanceFruit(tree, fruits, begin, end) {
    return fruits.map(fruit => fruit + tree).filter(fruit => fruit >= begin && fruit <= end).length;
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])