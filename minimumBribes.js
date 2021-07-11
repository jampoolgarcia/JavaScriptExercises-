/* test case 
[3, 2, 1, 4, 5]

[2, 5, 1, 3, 4]

[1, 2, 5, 3, 7, 8, 6, 4]

*/

/* console.log();
function minimumBribes(q) {

    let min = 0;

    let array = q.slice();

    console.log("array", array);


    for (let i = 0; i < q.length - 1; i++) {
        console.log("(i + 3) < q[i]", ((i + 3) < q[i]));
        if ((i + 3) < q[i]) {
            return console.log('Too chaotic');
        }

        if (array[i] > array[i + 1]) {
            min++;
            console.log("min:", min);
            console.log("array[i]:", array[i], "array[i+1]:", array[i + 1]);
            let aux = array[i];
            array[i] = array[i + 1];
            array[i + 1] = aux;
            console.log("array", array);
            for (let x = i; x > 0; x--) {
                console.log(array[x], ">", array[x - 1], "(array[x] > array[x - 1])", ((array[x] > array[x - 1])));
                if ((array[x] > array[x - 1])) {
                    console.log("break");
                    break;
                } else {
                    min++;
                    console.log("min:", min);
                    console.log("array[x]:", array[x], "array[x-1]:", array[x - 1]);
                    let aux = array[x];
                    array[x] = array[x - 1];
                    array[x - 1] = aux;
                    console.log("array", array);
                    
                }
            }
        }

    }

    console.log("Result:", min);

}
*/


function minimumBribes(q) {
    let min = 0;
    let array = q.slice();
    for (let i = 0; i < q.length - 1; i++) {
        if ((i + 3) < q[i]) {
            return console.log('Too chaotic');
        }
        if (array[i] > array[i + 1]) {
            min++;
            let aux = array[i];
            array[i] = array[i + 1];
            array[i + 1] = aux;
            for (let x = i; x > 0; x--) {
                if ((array[x] > array[x - 1])) {
                    break;
                } else {
                    min++;
                    let aux = array[x];
                    array[x] = array[x - 1];
                    array[x - 1] = aux;
                }
            }
        }

    }
    console.log(min);
}