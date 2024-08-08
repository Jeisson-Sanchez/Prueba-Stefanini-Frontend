import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraInventarioComponent } from './registra-inventario.component';

describe('RegistraInventarioComponent', () => {
  let component: RegistraInventarioComponent;
  let fixture: ComponentFixture<RegistraInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistraInventarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
