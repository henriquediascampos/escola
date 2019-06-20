import { Component, OnInit, Inject } from '@angular/core';
import { AlunosService } from '../services/alunos.service';
import { Aluno } from '../model/aluno.model';
import { DialogService } from 'src/app/util/dialogs/dialogs.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  private displayedColumns: string[] = ['nome', 'idade', 'acao'];
  private aluno: Aluno = new Aluno();
  private alunos: Array<any> = new Array();

  constructor(
    private alunosService: AlunosService,
    private dialogService: DialogService
    ) { }

  ngOnInit() {
    this.listarAlunos();
  }

  excluir(id: number) {
    this.alunosService
      .excluirAluno(id)
      .subscribe(aluno => {
        this.aluno = new Aluno();
        this.listarAlunos();
      }, err => { console.error('erro ao excluir aluno'); });
  }

  listarAlunos() {
    this.alunosService.listarAlunos()
      .subscribe(alunos => {
        this.alunos = alunos;
      }, err => { console.error('Erro ao listar os alunos'); });
  }

  openDialog(id: number) {
    const dialogRef = this.dialogService
      .openDialogSimpleMensage(
        `Tem certeza que deseja excluir este cadastro`);

      dialogRef.afterClosed().subscribe(result => {
        if (result) { this.excluir(id); }
    });
    }
}


