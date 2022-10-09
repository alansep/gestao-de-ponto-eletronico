import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';
import { ScreenHandlerModule } from 'src/app/shared-services/screen-handler/screen-handler.module';
import { FuncionarioCadastroComponent } from './funcionarios/funcionario-cadastro/funcionario-cadastro.component';
import { FuncionarioDetalhadoComponent } from './funcionarios/funcionario-detalhado/funcionario-detail.component';
import { FuncionariosBuscaComponent } from './funcionarios/funcionarios-busca/funcionarios-busca.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionariosClient } from './funcionarios/service/funcionarios-client.service';
import { FuncionariosService } from './funcionarios/service/funcionarios.service';
import { InicioComponent } from './inicio/inicio.component';
import { MarcacoesBuscaComponent } from './marcacoes/marcacoes-busca/marcacoes-busca.component';
import { MarcacoesRegistroComponent } from './marcacoes/marcacoes-registro/marcacoes-registro.component';
import { MarcacoesComponent } from './marcacoes/marcacoes.component';
import { MarcacoesClientService } from './marcacoes/service/marcacoes-client.service';
import { MarcacoesService } from './marcacoes/service/marcacoes.service';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { MarcacoesBuscaTodosComponent } from './marcacoes/marcacoes-busca/marcacoes-busca-todos/marcacoes-busca-todos.component';
import { MarcacoesBuscaPorFuncionarioComponent } from './marcacoes/marcacoes-busca/marcacoes-busca-por-funcionario/marcacoes-busca-por-funcionario.component';
import { MarcacoesBuscaDetailComponent } from './marcacoes/marcacoes-busca-detail/marcacoes-busca-detail.component';

@NgModule({
  declarations: [
    InicioComponent,
    FuncionariosComponent,
    MarcacoesComponent,
    RelatoriosComponent,
    FuncionariosBuscaComponent,
    FuncionarioDetalhadoComponent,
    MarcacoesRegistroComponent,
    FuncionarioCadastroComponent,
    MarcacoesBuscaComponent,
    MarcacoesBuscaTodosComponent,
    MarcacoesBuscaPorFuncionarioComponent,
    MarcacoesBuscaDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedComponentsModule,
    ScreenHandlerModule,
    FormsModule
  ],
  exports: [
    InicioComponent,
    FuncionariosComponent,
    MarcacoesComponent,
    RelatoriosComponent,
    FuncionariosBuscaComponent,
    FuncionarioDetalhadoComponent,
    FuncionarioCadastroComponent,
    MarcacoesBuscaComponent
  ],
  providers: [FuncionariosService, FuncionariosClient, MarcacoesService, MarcacoesClientService],
})
export class MenuModule {}
