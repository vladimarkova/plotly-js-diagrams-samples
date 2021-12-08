function getData() {
    return Math.random();
}

function plotData() {
    Plotly.plot('real-time-plot', [
        {
            y: [getData()],
            type: 'line'
        }
    ])

    setInterval(() => {
        // this is the main way to etend a plot with more points
        Plotly.extendTraces('real-time-plot', { y: [[getData()]] }, [0]);
    }, 200)
};

plotData();