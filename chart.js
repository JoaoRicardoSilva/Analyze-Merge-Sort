"use strict";
console.log(memoryA);
console.log(memoryB);
// Setup
const data = {
    datasets: [
        {
            label: "Merge Sort",
            data: memoryA,
            backgroundColor: "rgb(55, 99, 132)",
        },
        {
            label: "Bubble Sort",
            data: memoryB,
            backgroundColor: "rgb(550, 99, 13)",
        },
    ],
};

// Config
const config = {
    type: "scatter",
    data: data,
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                title: {
                    display: true,
                    text: "Number of items",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Milliseconds",
                },
            },
        },
        plugins: {
            title: {
                display: true,
                text: "Merge Sort vs Bubble Sort",
            },
        },
    },
};

const myChart = new Chart(document.getElementById("myChart"), config);
