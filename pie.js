var xValues = ["Positive", "Negative"];
//Change these values for the amount
var yValues = [63, 37];
var barColors = ["#38c76f","#ff0000"];
new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
  },
    options: {
        title: {
            display: true,
            //Change this text for the neighborhood
            text: "Happiness in Neighborhood"
        }
  }
});