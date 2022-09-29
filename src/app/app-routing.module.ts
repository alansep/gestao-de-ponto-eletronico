import { ApplicationRoutes } from './shared-services/application-routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { PublicModule } from './components/public/public.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    PublicModule,
    RouterModule.forRoot(ApplicationRoutes.routes),
  ],
  exports: [RouterModule],
  providers: [RouterModule],
})
export class AppRoutingModule {}
