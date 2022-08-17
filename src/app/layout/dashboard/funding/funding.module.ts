import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundingRoutingModule } from './funding-routing.module';
import { FundingComponent } from './funding.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FundingComponent],
  imports: [CommonModule, FundingRoutingModule, SharedModule],
})
export class FundingModule {}
