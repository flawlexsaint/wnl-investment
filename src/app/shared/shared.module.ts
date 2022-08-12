import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FooterComponent } from '../layout/website/components/footer/footer.component';
import { NavbarComponent } from '../layout/website/components/navbar/navbar.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { LoginComponent } from '../layout/onboarding/login/login.component';
import { SignUpComponent } from '../layout/onboarding/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardNavbarComponent } from '../layout/dashboard/components/dashboard-navbar/dashboard-navbar.component';
import { DashboardFooterComponent } from '../layout/dashboard/components/dashboard-footer/dashboard-footer.component';
import { TableComponent } from '../layout/dashboard/components/table/table.component';
import { WalletBalanceCardComponent } from '../layout/dashboard/components/wallet-balance-card/wallet-balance-card.component';
import { ProfileCardComponent } from '../layout/dashboard/components/profile-card/profile-card.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    DashboardNavbarComponent,
    DashboardFooterComponent,
    TableComponent,
    WalletBalanceCardComponent,
    ProfileCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    DashboardNavbarComponent,
    DashboardFooterComponent,
    TableComponent,
    WalletBalanceCardComponent,
    ProfileCardComponent,
    LottieModule,
  ],
})
export class SharedModule {}
