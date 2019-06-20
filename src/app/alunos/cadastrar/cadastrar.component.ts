import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../services/alunos.service';
import { Aluno } from '../model/aluno.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  private aluno: Aluno = new Aluno();

  constructor(
    private alunosService: AlunosService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  cadastrar() {
    this.alunosService
      .cadastrarAluno(this.aluno)
      .subscribe(aluno => {
        this.aluno = new Aluno();
        this.router.navigate(['alunos/listar']);
      }, err => { console.error('erro ao cadastrar aluno')});
  }

}
