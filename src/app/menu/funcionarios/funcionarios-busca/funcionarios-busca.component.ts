import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderState } from 'src/app/header/domain/header-state';
import { Funcionario } from '../domain/funcionario';
import { ScreenHandlerService } from './../../../screen-handler/services/screen-handler.service';
import { FuncionariosService } from './../service/funcionarios.service';

@Component({
  selector: 'app-funcionarios-busca',
  templateUrl: './funcionarios-busca.component.html',
  styleUrls: ['./funcionarios-busca.component.scss'],
})
export class FuncionariosBuscaComponent implements OnInit {
  public funcionarios: Array<Funcionario> = [];

  constructor(private service: FuncionariosService, private screenHandlerService: ScreenHandlerService, private router: Router) {}

  ngOnInit(): void {
    this.buscarFuncionarios();
    this.screenHandlerService.setHeaderStateAs(HeaderState.FEATURE_STATE);
    this.screenHandlerService.setFooterVisibilityAs(false);

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
