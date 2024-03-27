import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import Exporting from 'highcharts/modules/exporting';
import ExportData from 'highcharts/modules/export-data';
import Accessibility from 'highcharts/modules/accessibility';

HighchartsMore(Highcharts);
SolidGauge(Highcharts);
Exporting(Highcharts);
ExportData(Highcharts);
Accessibility(Highcharts);

const TrackGaugeChart = () => {
    useEffect(() => {
        const trackColors = Highcharts.getOptions().colors.map(color =>
            new Highcharts.Color(color).setOpacity(0.3).get()
        );

        

        Highcharts.chart("container", {
          chart: {
            type: "solidgauge",
            height: "80%",
            backgroundColor: "transparent",
           

          },
          title: {
            text: "Ambient Reaction",
            style: {
              fontSize: "20px",
              fontFamily: "poppins",
              color: "white",
              textTransform: "none",
            },
          },
          tooltip: {
            borderWidth: 0,
            backgroundColor: "none",
            shadow: false,
            style: {
              fontSize: "16px",
              fontFamily: "poppins",
              color: "white",
              textTransform: "none",
            },
            valueSuffix: "%",
            pointFormat:
              "{series.name}<br>" +
              '<span style="font-size: 2em; color: {point.color}; ' +
              'font-weight: bold">{point.y}</span>',
            positioner: function (labelWidth) {
              return {
                x: (this.chart.chartWidth - labelWidth) / 6,
                y: this.chart.plotHeight / 2 + 2,
              };
            },
          },
          pane: {
            startAngle: 0,
            endAngle: 360,
            background: [
              {
                // Track for Conversion
                outerRadius: "112%",
                innerRadius: "88%",
                backgroundColor: trackColors[0],
                borderWidth: 0,
              },
              {
                // Track for Engagement
                outerRadius: "87%",
                innerRadius: "63%",
                backgroundColor: trackColors[1],
                borderWidth: 0,
              },
              {
                // Track for Feedback
                outerRadius: "62%",
                innerRadius: "38%",
                backgroundColor: trackColors[2],
                borderWidth: 0,
              },
            ],
          },
          yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: [],
          },
          plotOptions: {
            solidgauge: {
              dataLabels: {
                enabled: false,
              },
              linecap: "round",
              stickyTracking: false,
              rounded: true,
            },
          },
          legend: {
            x: 15,
            y: 15,
            enabled: true,
            align: "right",
            verticalAlign: "middle",
            backgroundColor: "transparent",
            layout: "vertical",

            itemStyle: {
              fontWeight: "bold",
              fontSize: "13px",
              textTransform: "none",
              
            },
            useHTML: true,
            symbolRadius: 0,
            symbolHeight: 0,
            symbolWidth: 0,
            labelFormatter: function () {
                
                let status;
                let statusColor;
                if (this.yData[0] < 30) {
                    status = 'Bajo';
                    statusColor = '#3BF79D';
                } else if (this.yData[0] < 70) {
                    status = 'Medio';
                    statusColor = '#226BD8';
                } else {
                    status = 'Alto';
                    statusColor = '#FF4549';
                }
                return '<span><div style="width:10px;height:10px;border-radius:50%;background-color:' + this.userOptions.color + ';display:inline-block;margin-right:10px;"></div><span style="color: ' + this.userOptions.color + '">' + this.name + '</span><br/><span style="font-size: 12px; color: ' + statusColor + '; margin-left: 20px;">' + status + '</span></span>';                //return '<span style="color: ' + this.userOptions.color + '">' + this.name + '</span><br/><span style="font-size: 12px; color: ' + statusColor + '">' + status + '</span>';
            },
            
          },
          series: [
            {
              name: "Habitability",
              color: Highcharts.getOptions().colors[0],
              data: [
                {
                  color: Highcharts.getOptions().colors[0],
                  radius: "112%",
                  innerRadius: "88%",
                  y: 80,
                },
              ],
              showInLegend: true,
              custom: {
                icon: "filter",
                iconColor: "#303030",
              },
            },
            {
              name: "Energy efficiency",
              color: Highcharts.getOptions().colors[1],
              data: [
                {
                  color: Highcharts.getOptions().colors[1],
                  radius: "87%",
                  innerRadius: "63%",
                  y: 65,
                },
              ],
              showInLegend: true,

              custom: {
                icon: "comments-o",
                iconColor: "#ffffff",
              },
            },
            {
              name: "Crew fatigue",
              color: Highcharts.getOptions().colors[2],
              data: [
                {
                  color: Highcharts.getOptions().colors[2],
                  radius: "62%",
                  innerRadius: "38%",
                  y: 50,
                },
              ],
              showInLegend: true,
              custom: {
                icon: "commenting-o",
                iconColor: "#303030",
              },
            },
          ],
          
          exporting: {
            enabled: false,
          },
          credits: {
            enabled: false,
          },
        });
    }, []);

    return (
        <figure className="highcharts-figure">
            <div id="container"></div>
        </figure>
    );
};

export default TrackGaugeChart;
