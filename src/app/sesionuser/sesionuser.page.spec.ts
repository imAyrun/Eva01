import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesionuserPage } from './sesionuser.page';

describe('SesionuserPage', () => {
  let component: SesionuserPage;
  let fixture: ComponentFixture<SesionuserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
