import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSimpleMensageComponent } from './dialogs-simple-mensage.component';

describe('DialogsComponent', () => {
  let component: DialogSimpleMensageComponent;
  let fixture: ComponentFixture<DialogSimpleMensageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSimpleMensageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSimpleMensageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
