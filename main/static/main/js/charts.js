var ctx1 = document.getElementById("Chart1").getContext('2d');
var ctx2 = document.getElementById("Chart2").getContext('2d');
var ctx3 = document.getElementById("Chart3").getContext('2d');
var ctx4 = document.getElementById("Chart4").getContext('2d');

var Chart1 = new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: [],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        
      ],
      data: [12, 19, 3, 17, 28, 24]
    }]
  }
});

var Chart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: [],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        data: [18, 197, , 175, 218, 241, 71]
      }]
    }
  });

  var Chart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
      labels: [],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        data: [125, 159, 53, 157, 258, 254, 57]
      }]
    }
  });
  var Chart4 = new Chart(ctx4, {
    type: 'pie',
    data: {
      labels: [],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        data: [152, 159, 35, 517, 528, 524, 57]
      }]
    }
  });