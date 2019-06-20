import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModuleModule } from './customize/custom-material-module.module';
import { CustomIconsService } from './customize/custom-icons.service';
import { AlunosService } from './alunos/services/alunos.service';
import { AppRoutingModule } from './customize/app-routing.module';

import { FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/listar/alunos.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarComponent } from './alunos/cadastrar/cadastrar.component';
import { EditarComponent } from './alunos/editar/editar.component';
import { DialogSimpleMensageComponent } from './util/dialogs/dialogs-simple-mensage.component';
import { DialogService } from './util/dialogs/dialogs.service';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    CadastrarComponent,
    EditarComponent,
    DialogSimpleMensageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModuleModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    AlunosService,
    HttpClientModule,
    CustomIconsService,
    DialogService,
  ],
  entryComponents: [
    DialogSimpleMensageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
