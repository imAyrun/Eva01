import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegasistenciaPage } from './regasistencia.page';

describe('RegasistenciaPage', () => {
  let component: RegasistenciaPage;
  let fixture: ComponentFixture<RegasistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegasistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
