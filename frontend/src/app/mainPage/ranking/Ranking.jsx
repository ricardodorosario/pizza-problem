import React, { Component } from "react";
import "./ranking.css";
import axios from "axios";
import { connect } from "react-redux";
import ReactApexCharts from "react-apexcharts";
import WhitePanel from "../../components/WhitePanel";
const setRankingChart = (payload) => ({ type: "SET_RANKING_CHART", payload });

/**
 * Ranking class. Must be in class because ApexCharts component.
 *
 */
class Ranking extends Component {
  fetch() {
    axios
      .get("http://localhost:3001/chart/")
      .then((success) => {
        this.props.setRankingChart(success.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <WhitePanel title={"Lover's Ranking"} class='ranking'>
        {this.props.rankingChart && (
          <ReactApexCharts
            options={this.props.rankingChart.options}
            series={this.props.rankingChart.series}
            type='bar'
            height={350}
          />
        )}
      </WhitePanel>
    );
  }
}

//redux connection
const mapStateToProps = (state) => {
  return { rankingChart: state.rankingChart };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setRankingChart: (rankingChart) => dispatch(setRankingChart(rankingChart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
