import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioDetalhadoComponent } from './components/menu/funcionarios/funcionario-detalhado/funcionario-detalhado.component';
import { FuncionariosBuscaComponent } from './components/menu/funcionarios/funcionarios-busca/funcionarios-busca.component';
import { FuncionariosComponent } from './components/menu/funcionarios/funcionarios.component';
import { InicioComponent } from './components/menu/inicio/inicio.component';
import { MarcacoesComponent } from './components/menu/marcacoes/marcacoes.component';
import { MenuModule } from './components/menu/menu.module';
import { RelatoriosComponent } from './components/menu/relatorios/relatorios.component';

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
