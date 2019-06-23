import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSimpleMensageComponent } from './dialogs-simple-mensage.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog,
    ) {}

  openDialogConfirmation (msgTeste: string, width?: string, height?: string): any {
    return this.dialog.open(DialogSimpleMensageComponent, {
      width: width || 'auto',
      height: height || 'auto',
      data: { msg: msgTeste }
    });
  }
}
