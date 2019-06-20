import { Component, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  msg: '';
}

@Component({
  selector: 'app-dialog-simple',
  templateUrl: './dialogs-simple-mensage.component.html',
  styleUrls: ['./dialogs-simple-mensage.component.css']
})
export class DialogSimpleMensageComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }
}
