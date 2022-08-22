import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraLivroComponent } from './registra-livro.component';

describe('RegistraLivroComponent', () => {
  let component: RegistraLivroComponent;
  let fixture: ComponentFixture<RegistraLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
