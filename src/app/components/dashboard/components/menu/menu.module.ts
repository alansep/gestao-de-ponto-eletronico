import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';
import { ScreenHandlerModule } from 'src/app/shared-services/screen-handler/screen-handler.module';
import { FuncionarioDetalhadoComponent } from './funcionario-detalhado/funcionario-detail.component';
import { FuncionariosBuscaComponent } from './funcionarios/funcionarios-busca/funcionarios-busca.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionariosClient } from './funcionarios/service/funcionarios-client.service';
import { FuncionariosService } from './funcionarios/service/funcionarios.service';
import { InicioComponent } from './inicio/inicio.component';
import { MarcacoesComponent } from './marcacoes/marcacoes.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { MarcacoesRegistroComponent } from './marcacoes/marcacoes-registro/marcacoes-registro.component';

@NgModule({
  declarations: [
    InicioComponent,
    FuncionariosComponent,
    MarcacoesComponent,
    RelatoriosComponent,
    FuncionariosBuscaComponent,
    FuncionarioDetalhadoComponent,
    MarcacoesRegistroComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedComponentsModule,
    ScreenHandlerModule,
  ],
  exports: [
    InicioComponent,
    FuncionariosComponent,
    MarcacoesComponent,
    RelatoriosComponent,
    FuncionariosBuscaComponent,
    FuncionarioDetalhadoComponent,
  ],
  providers: [FuncionariosService, FuncionariosClient],
})
export class MenuModule {}
