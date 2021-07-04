"use strict";

const array = [
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
];
const mergeSort = (arr) => {
    const conquer = (l, r) => {
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
        console.log(result);
        return result;
    };

    const divide = (arg) => {
        if (arg.length < 2) return arg;
        console.log(arg);

        const middle = Math.floor(arg.length / 2);
        const left = arg.slice(0, middle);
        const right = arg.slice(middle);

        const sortedLeft = divide(left);
        const sortedRight = divide(right);
        return conquer(sortedLeft, sortedRight);
    };
    divide(arr);
};
mergeSort(array);
