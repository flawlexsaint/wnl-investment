import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentRoutingModule } from './investment-routing.module';
import { InvestmentComponent } from './investment.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [InvestmentComponent],
  imports: [CommonModule, InvestmentRoutingModule, SharedModule],
})
export class InvestmentModule {}
