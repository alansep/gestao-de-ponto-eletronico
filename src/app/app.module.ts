import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ScreenHandlerModule } from './shared-services/screen-handler/screen-handler.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule, RouterModule, ScreenHandlerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
