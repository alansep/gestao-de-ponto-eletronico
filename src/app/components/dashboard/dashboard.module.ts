import { DashboardComponent } from './dashboard.component';
import { MenuModule } from './components/menu/menu.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DashboardComponent],
  imports: [CommonModule, MenuModule, RouterModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
