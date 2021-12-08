const CSV =
    "https://raw.githubusercontent.com/chris3edwards3/exampledata/master/plotlyJS/line.csv";
const EXAMPLECSV = 
    "https://raw.githubusercontent.com/plotly/datasets/master/2014_apple_stock.csv"

// It will extract the data into an array of objects and each object has one row of data
function plotFromCSV() { 
    Plotly.d3.csv(CSV, data => {
        console.log(data);
        processData(data);
    });
};

function processData(allRows) {
    let x = [];
    let y1 = [];
    let y2 = [];

    for(row of allRows) {
        x.push(row['Date']);
        y1.push(row['A']);
        y2.push(row['B']);
    }

    console.log('X', x);
    console.log('Y1', y1);

    makePlotly(x, y1, y2);
};

function makePlotly(x, y1, y2) {
    let traces = [
        {
            x: x,
            y: y1,
            name: 'A',
            line: {
                color: 'red',
                width: 3
            }
        },
        {
            x: x,
            y: y2,
            name: 'B',
            line: {
                color: 'green',
                width: 3,
                dash: 'dash'
            }
        }
    ];
    let layout = {
        title: 'Basic Line Chart',
        yaxis: {
            range: [0, 100]
        },
        xaxis: {
            tickformat: '%d%m%y'
        } 
    };
    let config = {
        responsive: true,
        // staticPlot: true,
        editable: true
    };

    Plotly.newPlot('plot', traces, layout, config);
};

plotFromCSV();