import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3MaterielComponent } from './ex3-materiel.component';

describe('Ex3MaterielComponent', () => {
  let component: Ex3MaterielComponent;
  let fixture: ComponentFixture<Ex3MaterielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex3MaterielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3MaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
