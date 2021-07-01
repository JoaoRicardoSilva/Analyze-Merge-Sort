"use strict";

const array = [
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
];

const mergeSort = (arr) => {
    const divideResult = []
    const divide = (arg) => {
        const length = arg.length;
        if (length > 1) {
            const middle = Math.ceil((length - 1) / 2);
            const newArr1 = arg.slice(0, middle);
            const newArr2 = arg.slice(middle);
            console.log({ middle });
            console.log({ newArr1 });
            console.log({ newArr2 });
            divide(newArr1);
            divide(newArr2);
        } else if (length === 1) {
            console.log([arg]);
            divideResult.push(arg)
        } else {
            console.log("Something is wrong");
        }
    };
    divide(arr);
    console.log(divideResult);

    const conquer = (arg) ={
        
    }
};

mergeSort(array);
