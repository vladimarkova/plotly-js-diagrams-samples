function getData() {
    return Math.random();
}

function plotData(yVal) {
    // console.log(d3);
    Plotly.plot('real-time-plot', [
        {
            y: [yVal()],
            type: 'line'
        }
    ])

    let cnt = 0;
    let stop = false;

    setInterval(() => {
        // this is the main way to extend a plot with more points
        if (!stop) {
            Plotly.extendTraces('real-time-plot', { y: [[yVal()]] }, [0]);
            cnt++; 
        }
        
        if (cnt > 500) {
            Plotly.relayout('real-time-plot', {
                xaxis: {
                    range: [cnt-500, cnt]
                }
            });
        }

    }, 15)

    const realTimePlot = document.getElementById('real-time-plot');
    realTimePlot.addEventListener('plotly_click', function(){
        stop = true;
        alert('You clicked this Plotly chart!');
    });
};

plotData(getData);