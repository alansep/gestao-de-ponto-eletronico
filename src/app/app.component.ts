import { FooterService } from './footer/service/footer.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderAction } from './header/domain/header-action';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public rodapeVisivel: boolean = true;

  constructor(footerService: FooterService){

    footerService.buscarObservableDeVisibilidade().subscribe(estado => this.rodapeVisivel = estado);

  }


}
