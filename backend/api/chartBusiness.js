var { getVotes } = require("./votesBusiness");

//Returns the chart of the voters
function getChart() {
  var votes = getVotes()
    .sort((usrA, usrB) => usrB.Votes - usrA.Votes)
    .slice(0, 10);

  return {
    series: [
      {
        data: votes.map((usr) => usr.Votes),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: votes.map((usr) => usr.Username),
      },
      yaxis: {
        title: {
          text: "Likes",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " likes";
          },
        },
      },
    },
  };
}

module.exports = getChart;
