"use strict";

let input;

const memoryA = [];
const memoryB = [];

const mergeSort = (arr) => {
    // console.log([arr]);

    const tI = performance.now(); // For Big O purpose
    // console.log({ tI });
    const conquer = (l, r) => {
        // console.log({ l });
        // console.log({ r });
        const result = [];

        while (l.length && r.length) {
            result.push(l[0] > r[0] ? r.shift() : l.shift());
        }

        while (l.length) {
            result.push(l.shift());
        }
        while (r.length) {
            result.push(r.shift());
        }
        // console.log({ result });
        return result;
    };

    const divide = (arg) => {
        if (arg.length < 2) return arg;
        // console.log({ arg });

        const middle = Math.floor(arg.length / 2);
        const left = arg.slice(0, middle);
        // console.log({ left });
        const right = arg.slice(middle);
        // console.log({ right });

        const sortedLeft = divide(left);
        // console.log({ sortedLeft });
        const sortedRight = divide(right);
        // console.log({ sortedRight });
        return conquer(sortedLeft, sortedRight);
    };
    divide(arr);

    const tF = performance.now();
    // console.log({ tF });
    const t = tF - tI;
    // console.log({ t });
    memoryA.push({ x: arr.length, y: t });
};

const bubbleSort = (array) => {
    const tI = performance.now(); // For Big O purpose
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1])
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
    }
    const tF = performance.now();
    const t = tF - tI;
    memoryB.push({ x: array.length, y: t });
    return array;
};

const arrCreatorBack = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        let newArr = [];
        let num = arr[i] + 1;
        while (newArr.length < arr[i]) {
            num--;
            newArr.push(num);
        }
        func(newArr);
    }
};

input = [10, 50, 100, 500, 1000, 5000, 10000, 50000];

arrCreatorBack(input, mergeSort);
arrCreatorBack(input, bubbleSort);
