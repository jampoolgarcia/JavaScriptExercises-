function hourglassSum(arr) {

    let sum = 0;
    let hourglassSum;

    console.log(arr.length);

    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            let hourglass = [
                arr[r][c], arr[r][c + 1], arr[r][c + 2],
                arr[r + 1][c + 1],
                arr[r + 2][c], arr[r + 2][c + 1], arr[r + 2][c + 2]
            ];

            hourglass.forEach(item => {
                sum += item;
            })

            console.log('hourglass', hourglass);
            console.log('sum', sum);

            if (hourglassSum == undefined) {
                hourglassSum = sum;
            } else if(sum > hourglassSum){
                hourglassSum = sum;
            }

            sum = 0;
        }
    }

    return hourglassSum;
}

[
    [-9, -9, -9, 1, 1, 1]
    [0, -9, 0, 4, 3, 2]
    [-9, -9, -9, 1, 2, 3]
    [0, 0, 8, 6, 6, 0]
    [0, 0, 0, -2, 0, 0]
    [0, 0, 1, 2, 4, 0]
]