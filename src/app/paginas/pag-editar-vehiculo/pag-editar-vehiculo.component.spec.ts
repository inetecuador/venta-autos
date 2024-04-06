import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagEditarVehiculoComponent } from './pag-editar-vehiculo.component';

describe('PagEditarVehiculoComponent', () => {
  let component: PagEditarVehiculoComponent;
  let fixture: ComponentFixture<PagEditarVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagEditarVehiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagEditarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
