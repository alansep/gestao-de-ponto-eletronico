import { ScreenHandlerModule } from './screen-handler/screen-handler.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

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
