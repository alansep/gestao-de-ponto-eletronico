import { FooterService } from './../../../footer/service/footer.service';
import { HeaderService } from './../../../header/service/header.service';
import { Funcionario } from './../domain/funcionario';
import { FuncionariosService } from './../service/funcionarios.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderState } from 'src/app/header/domain/header-state';

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

  public funcionario: Funcionario = new Funcionario(-1, '', '', '', '', '');

  ngOnInit(): void {
    this.headerService.definirEstado(HeaderState.UPDATE_STATE);
    this.footerService.definirVisibilidadeComo(false);


    this.route.paramMap.subscribe((params) => {

      this.service.buscarFuncionarios().subscribe((result) => {
        this.funcionario = result.filter(
          (funcionario) => funcionario.id === Number(params.get('id'))
        )[0];
      });

    });
  }

}
