import { FuncionariosService } from './funcionarios/service/funcionarios.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MarcacoesComponent } from './marcacoes/marcacoes.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { FuncionariosBuscaComponent } from './funcionarios/funcionarios-busca/funcionarios-busca.component';
import { HttpClientModule } from '@angular/common/http';
import { FuncionariosClient } from './funcionarios/service/funcionarios-client.service';
import { SharedComponentsModule } from './../shared-components/shared-components.module';
import { FuncionarioDetalhadoComponent } from './funcionarios/funcionario-detalhado/funcionario-detalhado.component';

@NgModule({
  declarations: [
    InicioComponent,
    FuncionariosComponent,
    MarcacoesComponent,
    RelatoriosComponent,
    FuncionariosBuscaComponent,
    FuncionarioDetalhadoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedComponentsModule
  ],
  exports: [
    InicioComponent,
    FuncionariosComponent,
    MarcacoesComponent,
    RelatoriosComponent,
    FuncionariosBuscaComponent,
    FuncionarioDetalhadoComponent
  ],
  providers: [
    FuncionariosService,
    FuncionariosClient
  ]
})
export class MenuModule { }
