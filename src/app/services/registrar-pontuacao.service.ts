import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarPontuacaoService {
  private apiUrl = 'https://localhost:44304/Score/registrar-pontuacao';
  
  constructor(private http: HttpClient) { }

  registrarPontuacao(pontuacao: any): Observable<any> {
    return this.http.post(this.apiUrl, pontuacao);
  }
}
