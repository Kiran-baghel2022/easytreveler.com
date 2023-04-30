import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoritemselectionComponent } from './vendoritemselection.component';

describe('VendoritemselectionComponent', () => {
  let component: VendoritemselectionComponent;
  let fixture: ComponentFixture<VendoritemselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendoritemselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendoritemselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
