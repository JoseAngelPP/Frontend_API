import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
  chartExample3
} from '../../../shared/variables/charts';
@Component({
  selector: 'app-alternative',
  templateUrl: 'alternative.component.html'
})
export class AlternativeComponent implements OnInit, OnDestroy {
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked = true;
  public clicked1 = false;

  constructor() {}

  ngOnInit() {
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];

    const chartOrders = document.getElementById('chart-bars');

    parseOptions(Chart, chartOptions());

    const ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    const chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample3.options,
      data: chartExample3.data
    });

    const navbar = document.getElementsByClassName('navbar-top')[0];
    navbar.classList.add('bg-secondary');
    navbar.classList.add('navbar-light');
    navbar.classList.remove('bg-danger');
    navbar.classList.remove('navbar-dark');

    const navbarSearch = document.getElementsByClassName('navbar-search')[0];
    navbarSearch.classList.add('navbar-search-dark');
    navbarSearch.classList.remove('navbar-search-light');
  }

  ngOnDestroy() {
    const navbar = document.getElementsByClassName('navbar-top')[0];
    navbar.classList.remove('bg-secondary');
    navbar.classList.remove('navbar-light');
    navbar.classList.add('bg-danger');
    navbar.classList.add('navbar-dark');

    const navbarSearch = document.getElementsByClassName('navbar-search')[0];
    navbarSearch.classList.remove('navbar-search-dark');
    navbarSearch.classList.add('navbar-search-light');
  }
}
