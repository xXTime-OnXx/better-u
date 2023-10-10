import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImprovementsPageRoutingModule } from './improvements-routing.module';

import { ImprovementsPage } from './improvements.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ImprovementsPageRoutingModule,
        ExploreContainerComponentModule
    ],
  declarations: [ImprovementsPage]
})
export class ImprovementsPageModule {}
