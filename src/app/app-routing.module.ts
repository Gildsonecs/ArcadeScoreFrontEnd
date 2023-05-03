import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPontuacaoComponent } from './registrar-pontuacao/registrar-pontuacao.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: 'registrar-pontuacao', component: RegistrarPontuacaoComponent },
  { path: 'ranking', component: RankingComponent },
  { path: '', redirectTo: '/registrar-pontuacao', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
