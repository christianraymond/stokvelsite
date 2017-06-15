var colors = ["Navy", "Blue", "Aqua", "Red",
"Maroon", "Fuchsia", "Teal", "Olive",
"Green", "Lime", "Yellow", "Orange",
"Purple", "Silver", "Gray", "Black"];

var ctx1 = document.getElementById("graph").getContext('2d');

var idealDataset = {
    labels: ["Jan", "Feb", "March",
    "April", "May", "June", "July",
    "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [{
        label: 'Theory',
        data: [],
        backgroundColor: _.take(colors, 12),
    }]
}

var idealChart = new Chart(ctx1, {
    type: 'bar',
    data: idealDataset,
    options: {}
});

idealDataset.datasets[0].data.push(0)
idealChart.update();

var colors = ["Navy", "Blue", "Aqua", "Red",
"Maroon", "Fuchsia", "Teal", "Olive",
"Green", "Lime", "Yellow", "Orange",
"Purple", "Silver", "Gray", "Black"];

var ctx = document.getElementById("graph2").getContext('2d');

var realityDataset = {
    labels: ["Jan", "Feb", "March",
    "April", "May", "June", "July",
    "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: 'Reality',
        data: [],
        backgroundColor: _.take(colors, 12),
      },
      {
          label: 'Theory',
          data: [],
          backgroundColor: _.take(colors, 12),
      },


  ]
}

var realityChart = new Chart(ctx, {
    type: 'bar',
    data: realityDataset,
    options: {}
});

//chartData.datasets[0].data.push(0)
//realityChart.update();
