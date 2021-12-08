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

    let cnt = 0;

    setInterval(() => {
        // this is the main way to etend a plot with more points
        Plotly.extendTraces('real-time-plot', { y: [[getData()]] }, [0]);
        cnt++; 
        
        if (cnt > 500) {
            Plotly.relayout('real-time-plot', {
                xaxis: {
                    range: [cnt-500, cnt]
                }
            });
        }

    }, 15)
};

plotData();