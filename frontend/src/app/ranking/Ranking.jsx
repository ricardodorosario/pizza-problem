import React, { Component } from "react";
import "./ranking.css";
import ReactApexCharts from "react-apexcharts";
import WhitePanel from "../components/WhitePanel";

/**
 * Ranking jsx function
 */
export default class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankingChart: null,
    };
  }

  componentDidMount() {
    const chart = {
      series: [
        {
          data: [-10, 44, 55, 57, 56, 61, 58, 63, 60, 66],
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
          categories: [
            "John",
            "Mary",
            "Gary",
            "Lucas",
            "Ann",
            "Maria",
            "Suzie",
            "Mario",
            "Carlos",
          ],
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

    if (!this.state.rankingChart) {
      this.setState((state) => ({
        ...state,
        rankingChart: chart,
      }));
    }
  }

  render() {
    return (
      <WhitePanel title={"Lover's Ranking"}>
        {this.state.rankingChart && (
          <ReactApexCharts
            options={this.state.rankingChart.options}
            series={this.state.rankingChart.series}
            type='bar'
            height={350}
          />
        )}
      </WhitePanel>
    );
  }
}
