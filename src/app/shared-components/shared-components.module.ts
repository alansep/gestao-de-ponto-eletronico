import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { InputWithLabelComponent } from './input-with-label/input-with-label.component';

@NgModule({
  declarations: [DashboardCardComponent, InputWithLabelComponent],
  imports: [CommonModule, FormsModule],
  exports: [DashboardCardComponent, InputWithLabelComponent],
})
export class SharedComponentsModule {}
