import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPontuacaoComponent } from './registrar-pontuacao.component';

describe('RegistrarPontuacaoComponent', () => {
  let component: RegistrarPontuacaoComponent;
  let fixture: ComponentFixture<RegistrarPontuacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPontuacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPontuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
