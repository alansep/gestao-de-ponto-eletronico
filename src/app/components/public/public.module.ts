import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InvalidAuthenticationComponent } from './invalid-authentication/invalid-authentication.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InvalidAuthenticationComponent,
    NotFoundComponent,
    SignInComponent,
    SignUpComponent,
    WelcomeComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class PublicModule {}
