'use strict';

//для прямоугольника со сторонами a и b

function fullArr(a, b) { //5,7
    let arr = [];
    let line = a - 1;
    let column = b - 1;
    let z = 1;
    let up = 0;
    let right = b - 1;
    let botton = a - 1;
    let left = 0;

    for (let i = 0; i < a; i++) {
        arr[i] = [];
    }

    while (line > 1 && column > 1) {
        //верх
        for (let j = up; j <= column; j++) {
            arr[up][j] = z;
            z++;
        }
        up++;
        column--;
        //правая сторона
        for (let i = up; i <= line; i++) {
            arr[i][right] = z;
            z++;
        }
        line--;
        right--;
        if (line > 1 && column > 1) {
            // низ
            for (let j = column; j >= left; j--) {
                arr[botton][j] = z;
                z++;
            }
            botton--;

            //левая сторона
            for (let j = line; j > left; j--) {
                arr[j][left] = z;
                z++;
            }
            left++;
        }


    }

    return arr;
}

console.log(fullArr(5, 7));

