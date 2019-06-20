import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../model/aluno.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  listarAlunos(): Observable<any> {
    return this.http.get(environment.api99Url);
  }
  carregarAluno(id: any): Observable<any> {
    console.log(id);
    return this.http.get(environment.api99Url.concat('/', id));
  }

  cadastrarAluno(aluno: Aluno): Observable<any> {
    return this.http.post(environment.api99Url, aluno);
  }

  editarAluno(id: any, aluno: Aluno): Observable<any> {
    return this.http.put(environment.api99Url.concat(id), aluno);
  }

  excluirAluno(id: number): Observable<any> {
    return this.http.delete(environment.api99Url.concat(id.toString()) );
  }
}
