import { HeaderService } from './header/service/header.service';
import { FooterService } from './footer/service/footer.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderAction } from './header/domain/header-action';
import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderState } from './header/domain/header-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  public rodapeVisivel: boolean = true;

  constructor(private headerService: HeaderService){
  }

  ngOnInit(): void {
    this.headerService.buscarObservableDeEstadoAtualizacao().subscribe(result => {
      if(result !== HeaderState.HOME_STATE){
        this.rodapeVisivel = false;
      } else {
        this.rodapeVisivel = true;
      }
    });
  }


}
