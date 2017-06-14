var colors = ["Navy", "Blue", "Aqua", "Red",
"Maroon", "Fuchsia", "Teal", "Olive",
"Green", "Lime", "Yellow", "Orange",
"Purple", "Silver", "Gray", "Black"];

var ctx = document.getElementById("graph").getContext('2d');

var chartData = {
    labels: ["Jan", "Feb", "March",
    "April", "May", "June", "July",
    "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [{
        label: 'Amount',
        data: [1, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        backgroundColor: _.take(colors, 12),
    }]
}

var myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {}
});

chartData.datasets[0].data.push(0)
myChart.update();
