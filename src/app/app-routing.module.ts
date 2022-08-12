import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './layout/onboarding/login/login.component';
import { OnboardingComponent } from './layout/onboarding/onboarding.component';
import { SignUpComponent } from './layout/onboarding/sign-up/sign-up.component';
import { WebsiteComponent } from './layout/website/website.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layout/website/homepage/homepage.module').then(
            (m) => m.HomepageModule
          ),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./layout/website/about-us/about-us.module').then(
            (m) => m.AboutUsModule
          ),
      },
    ],
  },
  {
    path: 'onboarding',
    component: OnboardingComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layout/dashboard/index/index.module').then(
            (m) => m.IndexModule
          ),
      },
      {
        path: 'transaction-history',
        loadChildren: () =>
          import(
            './layout/dashboard/transaction-history/transaction-history.module'
          ).then((m) => m.TransactionHistoryModule),
      },
      {
        path: 'transaction-history/:id',
        loadChildren: () =>
          import(
            './layout/dashboard/transaction-history/detail/detail.module'
          ).then((m) => m.DetailModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./layout/dashboard/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
