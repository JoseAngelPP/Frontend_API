import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {
  chartOptions,
  parseOptions,
  chartBarStackedData,
  chartDoughnutData,
  chartPieData,
  chartPointsData,
  chartSalesData,
  chartBarsData
} from '../../shared/variables/charts';

@Component({
  selector: 'app-charts',
  templateUrl: 'charts.component.html'
})
export class ChartsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    parseOptions(Chart, chartOptions());
    //
    // chart bar stacked
    // Variables
    const chartBarStacked = document.getElementById('chart-bar-stacked');

    // Init chart
    const barStackedChart = new Chart(chartBarStacked, {
      type: 'bar',
      data: chartBarStackedData.data,
      options: chartBarStackedData.options
    });

    //
    // chart doughnut
    // Variables
    const chartDoughnut = document.getElementById('chart-doughnut');

    // Init chart
    const doughnutChart = new Chart(chartDoughnut, {
      type: 'doughnut',
      data: chartDoughnutData.data,
      options: chartDoughnutData.options
    });

    //
    // chart pie
    // Variables
    const chartPie = document.getElementById('chart-pie');

    // Init chart
    const pieChart = new Chart(chartPie, {
      type: 'pie',
      data: chartPieData.data,
      options: chartPieData.options
    });

    //
    // chart points
    // Variables
    const chartPoints = document.getElementById('chart-points');

    // Init chart
    const pointsChart = new Chart(chartPoints, {
      type: 'line',
      data: chartPointsData.data,
      options: chartPointsData.options
    });

    //
    // chart sales
    // Variables
    const chartSales = document.getElementById('chart-sales');

    // Init chart
    const salesChart = new Chart(chartSales, {
      type: 'line',
      data: chartSalesData.data,
      options: chartSalesData.options
    });

    //
    // chart bars
    // Variables
    const chartBars = document.getElementById('chart-bars');

    // Init chart
    const barsChart = new Chart(chartBars, {
      type: 'bar',
      data: chartBarsData.data
    });
  }
}
