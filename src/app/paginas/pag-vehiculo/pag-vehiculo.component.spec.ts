import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagVehiculoComponent } from './pag-vehiculo.component';

describe('PagVehiculoComponent', () => {
  let component: PagVehiculoComponent;
  let fixture: ComponentFixture<PagVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagVehiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
