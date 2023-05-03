import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarPontuacaoComponent } from './registrar-pontuacao/registrar-pontuacao.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingService } from './services/ranking.service';
import { RegistrarPontuacaoService } from './services/registrar-pontuacao.service';



@NgModule({
  declarations: [
    AppComponent,
    RegistrarPontuacaoComponent,
    RankingComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,  
    AppRoutingModule,
    ReactiveFormsModule   
  ],
  providers: [HttpClientModule, RankingService, RegistrarPontuacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
