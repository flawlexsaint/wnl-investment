import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FooterComponent } from '../layout/website/components/footer/footer.component';
import { NavbarComponent } from '../layout/website/components/navbar/navbar.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [MaterialModule, FooterComponent, NavbarComponent, LottieModule],
})
export class SharedModule {}
