import React from 'react';
import "./../../App.css";
function Chart() {
  return (
    <div className="chart-grid">
              <div className="main-chart">
                <div className="chart-head">
                  <h3>Weekly progress</h3>
                  <span className="las la-cog" />
                </div>
                <div id="myfirstchart" style={{height: '350px'}} />
              </div>
              <div className="progress-donut">
                <div className="chart-head">
                  <h3>Completed Tasks</h3>
                </div>
                <div id="donut-example" className="progress-donut" style={{height: '350px'}} />
                {/* <div class="t" style="height: 350px;"></div> */}
              </div>
            </div>
  )
}

export default Chart