import {  Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CustomIconsService {

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon('icon-menu', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon-menu.svg'));
        iconRegistry.addSvgIcon('icon-home', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon-home.svg'));
        iconRegistry.addSvgIcon('icon-list', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon-list.svg'));
        iconRegistry.addSvgIcon('icon-save', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon-save.svg'));
        iconRegistry.addSvgIcon('icon-delete', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon-delete.svg'));
        iconRegistry.addSvgIcon('icon-edit', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon-edit.svg'));
    }

}
