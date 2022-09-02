import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputWithLabelComponent } from './input-with-label/input-with-label.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardCardComponent,
    InputWithLabelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
