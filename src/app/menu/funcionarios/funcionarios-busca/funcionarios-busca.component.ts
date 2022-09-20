import { FooterService } from './../../../footer/service/footer.service';
import { HeaderService } from './../../../header/service/header.service';
import { Router } from '@angular/router';
import { FuncionariosService } from './../service/funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../domain/funcionario';
import { HeaderState } from 'src/app/header/domain/header-state';

@Component({
  selector: 'app-funcionarios-busca',
  templateUrl: './funcionarios-busca.component.html',
  styleUrls: ['./funcionarios-busca.component.scss'],
})
export class FuncionariosBuscaComponent implements OnInit {
  public funcionarios: Array<Funcionario> = [];

  constructor(private service: FuncionariosService, private headerService: HeaderService, private footerService: FooterService, private router: Router) {}

  ngOnInit(): void {
    this.buscarFuncionarios();
    this.headerService.definirEstado(HeaderState.FEATURE_STATE);
    this.footerService.definirVisibilidadeComo(false);

  }

  public buscarFuncionarios(): void {
    this.service.buscarFuncionarios().subscribe((result) => {
      this.funcionarios = result.sort((funcionarioA, funcionarioB) => funcionarioA.nome.localeCompare(funcionarioB.nome));
    });
  }

  public buscarFuncionarioPorNome(nome: string): void {
    this.service.buscarFuncionarios().subscribe((result) => {
      this.funcionarios = result.filter((funcionario) =>
        funcionario.nome.toUpperCase().includes(nome.toLocaleUpperCase())
      ).sort((funcionarioA, funcionarioB) => funcionarioA.nome.localeCompare(funcionarioB.nome));
    });
  }

  public selecionarFuncionario(funcionario: Funcionario): void {
    this.router.navigate(['funcionarios', 'busca', funcionario.id.toString()]);
  }
}
