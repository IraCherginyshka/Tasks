'use strict';

// для квадрата со стороной a

function fullArr(a) {
    let arr = [];
    let border = a - 1;
    let z = 1;
    let up = 0;
    let right = a - 1;
    let botton = a - 1;
    let left = 0;

    for (let i = 0; i < a; i++) {
        arr[i] = [];
    }

    while (border > 1) {
        //верхняя строка
        for (let j = up; j <= border; j++) {
            arr[up][j] = z;
            z++;
        }
        up++;

        //правая сторона
        for (let i = up; i <= border; i++) {
            arr[i][right] = z;
            z++;
        }
        right--;

        //низ
        for (let j = border - 1; j >= left; j--) {
            arr[botton][j] = z;
            z++;
        }
        botton--;
        border--;

        //левая сторона
        for (let j = border; j > left; j--) {
            arr[j][left] = z;
            z++;
        }
        left++;
    }

    return arr;
}

console.log(fullArr(10));
