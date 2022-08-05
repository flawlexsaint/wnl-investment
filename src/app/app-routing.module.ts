import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
