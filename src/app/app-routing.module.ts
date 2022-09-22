import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioDetalhadoComponent } from './menu/funcionarios/funcionario-detalhado/funcionario-detalhado.component';
import { FuncionariosBuscaComponent } from './menu/funcionarios/funcionarios-busca/funcionarios-busca.component';
import { FuncionariosComponent } from './menu/funcionarios/funcionarios.component';
import { InicioComponent } from './menu/inicio/inicio.component';
import { MarcacoesComponent } from './menu/marcacoes/marcacoes.component';
import { MenuModule } from './menu/menu.module';
import { RelatoriosComponent } from './menu/relatorios/relatorios.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  {
    path: 'funcionarios',
    component: FuncionariosComponent,
  },
  { path: 'funcionarios/busca', component: FuncionariosBuscaComponent },
  { path: 'funcionarios/busca/:id', component: FuncionarioDetalhadoComponent },
  { path: 'marcacoes', component: MarcacoesComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MenuModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
