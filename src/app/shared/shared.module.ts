import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FooterComponent } from '../layout/website/_components/footer/footer.component';
import { NavbarComponent } from '../layout/website/_components/navbar/navbar.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { LoginComponent } from '../layout/onboarding/login/login.component';
import { SignUpComponent } from '../layout/onboarding/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardNavbarComponent } from '../layout/dashboard/_components/dashboard-navbar/dashboard-navbar.component';
import { DashboardFooterComponent } from '../layout/dashboard/_components/dashboard-footer/dashboard-footer.component';
import { TableComponent } from '../layout/dashboard/_components/table/table.component';
import { WalletBalanceCardComponent } from '../layout/dashboard/_components/wallet-balance-card/wallet-balance-card.component';
import { ProfileCardComponent } from '../layout/dashboard/_components/profile-card/profile-card.component';
import { AdvertOneComponent } from '../layout/dashboard/_components/advert-one/advert-one.component';
import { AdvertTwoComponent } from '../layout/dashboard/_components/advert-two/advert-two.component';
import { BalanceCardComponent } from '../layout/dashboard/_components/balance-card/balance-card.component';

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
    AdvertOneComponent,
    AdvertTwoComponent,
    BalanceCardComponent,
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
    AdvertOneComponent,
    AdvertTwoComponent,
    BalanceCardComponent,
    LottieModule,
  ],
})
export class SharedModule {}
