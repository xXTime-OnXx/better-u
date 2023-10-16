import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ImprovementsPageRoutingModule} from './improvements-routing.module';

import {ImprovementsPage} from './improvements.page';
import {NgApexchartsModule} from "ng-apexcharts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule,
    ImprovementsPageRoutingModule,
  ],
  declarations: [ImprovementsPage]
})
export class ImprovementsPageModule {
}
