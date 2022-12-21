import { Component } from '@angular/core';
import { ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexMarkers,
  ApexTooltip
} from "ng-apexcharts";

@Component({
  selector: 'app-sp-ad-analysis-tow',
  templateUrl: './sp-ad-analysis-tow.component.html',
  styleUrls: ['./sp-ad-analysis-tow.component.scss']
})

export class SpAdAnalysisTowComponent {
  title: ApexTitleSubtitle = {
    text: "My First Angular Chart"
  }
  markers: any; //ApexMarkers;

  colors: string[] = ['#6366F1', '#EAE5FE'];
  series: ApexAxisChartSeries = [
    {
      name: "Net Profit",

      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: "Revenue",
      type: "culome",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },

    {
      name: "Free Cash Flow",

      data: []
    }
  ]
  chart: ApexChart = {
    type: "bar",
    height: 400,
  }
  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: false,
      columnWidth: "70%",
    }
  }
  dataLabels: ApexDataLabels = {
    enabled: false
  }
  stroke: ApexStroke = {
    show: true,
    width: [3],
    colors: ["transparent"]
  }

  xaxis: ApexXAxis = {
    categories: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ],
    // axisBorder: {
    //   show: true,
    //   color: "#FEB019"
    // },
  }
  yaxis: ApexYAxis = {
    title: {
      text: "$ (thousands)"
    }
  }
  fill: ApexFill = {
    opacity: 1
  }
  tooltip: ApexTooltip = {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
}




