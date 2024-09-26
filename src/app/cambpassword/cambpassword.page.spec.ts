import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambpasswordPage } from './cambpassword.page';

describe('CambpasswordPage', () => {
  let component: CambpasswordPage;
  let fixture: ComponentFixture<CambpasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CambpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
