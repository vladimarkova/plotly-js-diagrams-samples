function getData() {
    return Math.random();
}

function plotData() {
    // console.log(d3);
    Plotly.plot('real-time-plot', [
        {
            y: [getData()],
            type: 'line'
        }
    ])

    let cnt = 0;
    let stop = false;

    setInterval(() => {
        // this is the main way to extend a plot with more points
        if (!stop) {
            Plotly.extendTraces('real-time-plot', { y: [[getData()]] }, [0]);
            cnt++; 
        }
        
        // if (Plotly.onplotlyclick...)
        if (cnt > 500) {
            Plotly.relayout('real-time-plot', {
                xaxis: {
                    range: [cnt-500, cnt]
                }
            });
        }

    }, 15)

    var myPlot = document.getElementById('real-time-plot');
    myPlot.on('plotly_click', function(){
        stop = true;
        alert('You clicked this Plotly chart!');
    });
};

// plotData();