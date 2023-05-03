import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrarPontuacaoService } from '../services/registrar-pontuacao.service';

@Component({
  selector: 'app-registrar-pontuacao',
  templateUrl: './registrar-pontuacao.component.html',
  styleUrls: ['./registrar-pontuacao.component.css']
})

export class RegistrarPontuacaoComponent {
  pontuacaoForm: FormGroup;

  constructor(private fb: FormBuilder, private registrarPontuacaoService: RegistrarPontuacaoService, private router: Router) {
    this.pontuacaoForm = this.fb.group({
      date: ['', Validators.required],
      points: ['', Validators.required],
      player: ['', Validators.required]
    });
  }

  salvarPontuacao() {
    this.registrarPontuacaoService.registrarPontuacao(this.pontuacaoForm.value).subscribe(
      response => {
        console.log('Pontuação registrada com sucesso!', response);
        this.router.navigate(['/ranking']);
      },
      error => {
        console.error('Erro ao registrar pontuação:', error);
      }
    );   
  }
}
