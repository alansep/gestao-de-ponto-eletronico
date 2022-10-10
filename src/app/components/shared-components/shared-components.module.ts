import { UsersService } from './../../shared-services/users.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { InputWithLabelComponent } from './input-with-label/input-with-label.component';
import { WorkerSearchComponent } from './worker-search/worker-search.component';
import { OperationTitleComponent } from './operation-title/operation-title.component';

@NgModule({
  declarations: [DashboardCardComponent, InputWithLabelComponent, WorkerSearchComponent, OperationTitleComponent],
  imports: [CommonModule, FormsModule],
  exports: [DashboardCardComponent, InputWithLabelComponent, WorkerSearchComponent, OperationTitleComponent]
})
export class SharedComponentsModule {}
