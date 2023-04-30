import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdestinationComponent } from './showdestination.component';

describe('ShowdestinationComponent', () => {
  let component: ShowdestinationComponent;
  let fixture: ComponentFixture<ShowdestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdestinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowdestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
