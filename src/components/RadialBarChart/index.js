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
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: this.chart.plotHeight / 2 + 15,
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
            enabled: true,
            align: "right",
            verticalAlign: "middle",
            layout: "vertical",
            itemStyle: {
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "13px",
            },
          },
          series: [
            {
              name: "Habitability",
              data: [
                {
                  color: Highcharts.getOptions().colors[0],
                  radius: "112%",
                  innerRadius: "88%",
                  y: 80,
                },
              ],
              custom: {
                icon: "filter",
                iconColor: "#303030",
              },
            },
            {
              name: "Energy efficiency",
              data: [
                {
                  color: Highcharts.getOptions().colors[1],
                  radius: "87%",
                  innerRadius: "63%",
                  y: 65,
                },
              ],
              custom: {
                icon: "comments-o",
                iconColor: "#ffffff",
              },
            },
            {
              name: "Crew fatigue",
              data: [
                {
                  color: Highcharts.getOptions().colors[2],
                  radius: "62%",
                  innerRadius: "38%",
                  y: 50,
                },
              ],
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
