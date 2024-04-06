import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagRegistrarVehiculoComponent } from './pag-registrar-vehiculo.component';

describe('PagRegistrarVehiculoComponent', () => {
  let component: PagRegistrarVehiculoComponent;
  let fixture: ComponentFixture<PagRegistrarVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagRegistrarVehiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagRegistrarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
