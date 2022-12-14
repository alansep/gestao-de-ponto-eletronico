import { HorasTrabalhadasComponent } from './../components/dashboard/components/menu/relatorios/horas-trabalhadas/horas-trabalhadas.component';
import { MarcacoesPorPeriodoComponent } from './../components/dashboard/components/menu/relatorios/marcacoes-por-periodo/marcacoes-por-periodo.component';
import { MarcacoesBuscaDetailComponent } from './../components/dashboard/components/menu/marcacoes/marcacoes-busca-detail/marcacoes-busca-detail.component';
import { MarcacoesBuscaPorFuncionarioComponent } from './../components/dashboard/components/menu/marcacoes/marcacoes-busca/marcacoes-busca-por-funcionario/marcacoes-busca-por-funcionario.component';
import { MarcacoesBuscaTodosComponent } from './../components/dashboard/components/menu/marcacoes/marcacoes-busca/marcacoes-busca-todos/marcacoes-busca-todos.component';
import { Routes } from '@angular/router';
import { FuncionarioDetalhadoComponent } from '../components/dashboard/components/menu/funcionarios/funcionario-detalhado/funcionario-detail.component';
import { FuncionariosBuscaComponent } from '../components/dashboard/components/menu/funcionarios/funcionarios-busca/funcionarios-busca.component';
import { FuncionariosComponent } from '../components/dashboard/components/menu/funcionarios/funcionarios.component';
import { InicioComponent } from '../components/dashboard/components/menu/inicio/inicio.component';
import { MarcacoesComponent } from '../components/dashboard/components/menu/marcacoes/marcacoes.component';
import { RelatoriosComponent } from '../components/dashboard/components/menu/relatorios/relatorios.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SignInComponent } from '../components/public/sign-in/sign-in.component';
import { SignUpComponent } from '../components/public/sign-up/sign-up.component';
import { WelcomeComponent } from '../components/public/welcome/welcome.component';
import { FuncionarioCadastroComponent } from './../components/dashboard/components/menu/funcionarios/funcionario-cadastro/funcionario-cadastro.component';
import { MarcacoesBuscaComponent } from './../components/dashboard/components/menu/marcacoes/marcacoes-busca/marcacoes-busca.component';
import { MarcacoesRegistroComponent } from './../components/dashboard/components/menu/marcacoes/marcacoes-registro/marcacoes-registro.component';
import { RouteAuthGuardService } from './route-auth-guard.service';

export class ApplicationRoutes {
  public static DASHBOARD = 'dashboard';
  public static INICIO = 'inicio';
  public static FUNCIONARIOS = 'funcionarios';
  public static FUNCIONARIOS_BUSCA = 'funcionarios';
  public static BUSCA = 'busca';
  public static FUNCIONARIOS_BUSCA_ID = 'funcionarios/busca/:id';
  public static MARCACOES = 'marcacoes';
  public static RELATORIOS = 'relatorios';
  public static SIGN_IN = 'sign-in';
  public static SIGN_UP = 'sign-up';
  public static REGISTRO = 'registro';
  public static CADASTRO = 'cadastro';
  public static TODOS = 'todos';
  public static DETALHADO = 'detalhado';
  public static PERIODO = 'periodo';
  public static HORAS = 'horas';

  public static routes: Routes = [
    {
      path: ApplicationRoutes.DASHBOARD,
      component: DashboardComponent,
      canActivate: [RouteAuthGuardService],
      children: [
        { path: ApplicationRoutes.INICIO, component: InicioComponent },
        {
          path: ApplicationRoutes.FUNCIONARIOS,
          component: FuncionariosComponent,
        },
        {
          path: ApplicationRoutes.FUNCIONARIOS + '/' + ApplicationRoutes.BUSCA,
          component: FuncionariosBuscaComponent,
        },
        {
          path:
            ApplicationRoutes.FUNCIONARIOS + '/' + ApplicationRoutes.CADASTRO,
          component: FuncionarioCadastroComponent,
        },
        {
          path: ApplicationRoutes.FUNCIONARIOS_BUSCA_ID,
          component: FuncionarioDetalhadoComponent,
        },
        { path: ApplicationRoutes.MARCACOES, component: MarcacoesComponent },
        {
          path: ApplicationRoutes.MARCACOES + '/' + ApplicationRoutes.REGISTRO,
          component: MarcacoesRegistroComponent,
        },
        {
          path: ApplicationRoutes.MARCACOES + '/' + ApplicationRoutes.BUSCA,
          component: MarcacoesBuscaComponent,
        },
        {
          path: ApplicationRoutes.MARCACOES + '/' + ApplicationRoutes.BUSCA + '/' + ApplicationRoutes.TODOS,
          component: MarcacoesBuscaTodosComponent,
        },
        {
          path: ApplicationRoutes.MARCACOES + '/' + ApplicationRoutes.BUSCA + '/' + ApplicationRoutes.FUNCIONARIOS,
          component: MarcacoesBuscaPorFuncionarioComponent,
        },
        {
          path: ApplicationRoutes.MARCACOES + '/' + ApplicationRoutes.BUSCA + '/:id',
          component: MarcacoesBuscaDetailComponent,
        },
        { path: ApplicationRoutes.RELATORIOS, component: RelatoriosComponent },
        { path: ApplicationRoutes.RELATORIOS + '/' + ApplicationRoutes.PERIODO,  component: MarcacoesPorPeriodoComponent },
        { path: ApplicationRoutes.RELATORIOS + '/' + ApplicationRoutes.HORAS,  component: HorasTrabalhadasComponent },

        { path: '', redirectTo: ApplicationRoutes.INICIO, pathMatch: 'full' },
      ],
    },
    {
      path: '',
      component: WelcomeComponent,
    },
    {
      path: ApplicationRoutes.SIGN_IN,
      component: SignInComponent,
    },
    {
      path: ApplicationRoutes.SIGN_UP,
      component: SignUpComponent,
    },
  ];
}
