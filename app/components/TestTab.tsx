import React, { Component } from "react";
import tableau from "tableau-api";

class TableauTab extends Component {
  componentDidMount() {
    this.initViz();
  }

  initViz() {
    const vizUrl =
      "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
    const vizContainer = this.vizContainer;
    const options = {
      width: this.vizContainer.offsetWidth,
      height: this.vizContainer.offsetHeight,
    };
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options);
  }

  render() {
    return (
      <div
        className="vizDiv"
        ref={(div) => {
          this.vizContainer = div;
        }}
      ></div>
    );
  }
}

export default TableauTab;
