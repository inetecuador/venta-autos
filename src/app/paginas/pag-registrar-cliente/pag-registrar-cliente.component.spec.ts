import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagRegistrarClienteComponent } from './pag-registrar-cliente.component';

describe('PagRegistrarClienteComponent', () => {
  let component: PagRegistrarClienteComponent;
  let fixture: ComponentFixture<PagRegistrarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagRegistrarClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagRegistrarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
