import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithLabelComponent } from './input-with-label/input-with-label.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardCardComponent, InputWithLabelComponent],
  imports: [CommonModule, FormsModule],
  exports: [DashboardCardComponent, InputWithLabelComponent],
})
export class SharedComponentsModule {}
