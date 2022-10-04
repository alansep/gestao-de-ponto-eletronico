import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderState } from '../../../header/domain/header-state';
import { FooterService } from './../../../footer/service/footer.service';
import { HeaderService } from './../../../header/service/header.service';
import { Worker } from './../domain/funcionario';
import { FuncionariosService } from './../service/funcionarios.service';

@Component({
  selector: 'app-funcionario-detalhado',
  templateUrl: './funcionario-detalhado.component.html',
  styleUrls: ['./funcionario-detalhado.component.scss'],
})
export class FuncionarioDetalhadoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: FuncionariosService,
    private headerService: HeaderService,
    private footerService: FooterService
  ) {}

  public worker: Worker = new Worker(-1, '', '', '', '', '');

  ngOnInit(): void {
    this.headerService.setHeaderStateAs(HeaderState.UPDATE_STATE);
    this.footerService.setVisibilityAs(false);

    this.route.paramMap.subscribe((params) => {
      this.service.getWorkers().subscribe((result) => {
        this.worker = result.filter(
          (funcionario) => funcionario.id === Number(params.get('id'))
        )[0];
      });
    });
  }
}
