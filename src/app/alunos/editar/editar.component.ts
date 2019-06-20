import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../services/alunos.service';
import { Aluno } from '../model/aluno.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  private paramId: string;
  private aluno: Aluno = new Aluno();
  constructor(
    private alunosService: AlunosService,
    private router: Router,
    private routes: ActivatedRoute
    ) { }

  ngOnInit() {
    this.paramId = this.routes.snapshot.params['id'];
    this.carregarAluno(this.paramId);
  }

  carregarAluno(id: any) {
    this.alunosService
      .carregarAluno(id)
      .subscribe(aluno => {
        this.aluno = aluno;
      }, err => console.error('erro ao buscar aluno por id'));
  }

  editar(id: number) {
    this.alunosService
      .editarAluno(id, this.aluno)
      .subscribe(aluno => {
        this.aluno = new Aluno();
        this.router.navigate(['alunos/listar']);
      }, err => console.error('erro ao atualizar aluno'));
  }
}
