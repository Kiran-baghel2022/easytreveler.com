import { ComponentFixture, TestBed } from '@angular/core/testing';

import { easytrevelerComponent } from './easytreveler.component';

describe('easytrevelerComponent', () => {
  let component: easytrevelerComponent;
  let fixture: ComponentFixture<easytrevelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ easytrevelerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(easytrevelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
