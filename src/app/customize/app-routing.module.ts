import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from '../alunos/listar/alunos.component';
import { EditarComponent } from '../alunos/editar/editar.component';
import { CadastrarComponent } from '../alunos/cadastrar/cadastrar.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'alunos/listar',
    pathMatch: 'full'
  },
  {
    path: 'alunos/listar',
    component: AlunosComponent,
  },
  {
    path: 'alunos/editar/:id',
    component: EditarComponent,
  },
  {
    path: 'alunos/cadastrar',
    component: CadastrarComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
