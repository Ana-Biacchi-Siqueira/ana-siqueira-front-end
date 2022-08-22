import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraAutorComponent } from './registra-autor.component';

describe('RegistraAutorComponent', () => {
  let component: RegistraAutorComponent;
  let fixture: ComponentFixture<RegistraAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
