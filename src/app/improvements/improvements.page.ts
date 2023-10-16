import {Component, OnDestroy} from '@angular/core';
import {ImprovementItem} from "./improvement-item.dto";
import {ApexChart, ApexNonAxisChartSeries, ApexPlotOptions} from "ng-apexcharts";
import {ImprovementService} from "../../service/improvement.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-improvements',
  templateUrl: './improvements.page.html',
  styleUrls: ['./improvements.page.scss'],
})
export class ImprovementsPage implements OnDestroy {

  public chartOptions: ChartOptions = {
    series: [0],
    chart: {
      height: 350,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70"
        },
        dataLabels: {
          name: {
            show: true,
            offsetY: -10,
            color: "#888",
            fontSize: "16px"
          },
          value: {
            show: true,
            fontSize: "30px",
            formatter: (val) => this.calculateTotalCompletedImprovementValues().toString(),
          },
        }
      }
    },
    labels: ["Achieved Points"]
  };
  public improvementList: ImprovementItem[] = [];

  private totalImprovementValues: number = 0;
  private improvementSubscription: Subscription | undefined;

  constructor(private improvementService: ImprovementService) {
    this.initializeImprovements();
  }

  public onImprovementCheckboxChanged(): void {
    const totalCompletedImprovementValues = this.calculateTotalCompletedImprovementValues();
    const progress = 100 / this.totalImprovementValues * totalCompletedImprovementValues;
    this.chartOptions.series = [progress];
  }

  private calculateTotalCompletedImprovementValues(): number {
    return this.improvementList.filter(improvement => improvement.completed)
      .reduce((sum, improvement) => sum + improvement.value, 0);
  }

  private initializeImprovements() {
    this.improvementSubscription = this.improvementService.getImprovements()
      .subscribe(list => {
        this.improvementList = list.map(improvement => improvement.toItem());
        this.totalImprovementValues = this.improvementList.reduce((sum, improvement) => sum + improvement.value, 0)
      });
  }

  ngOnDestroy(): void {
    this.improvementSubscription?.unsubscribe();
  }
}

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};
