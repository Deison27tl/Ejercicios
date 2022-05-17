import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaConsultaComponent } from './prueba-consulta.component';

describe('PruebaConsultaComponent', () => {
  let component: PruebaConsultaComponent;
  let fixture: ComponentFixture<PruebaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
