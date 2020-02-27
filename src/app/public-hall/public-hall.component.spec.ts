import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHallComponent } from './public-hall.component';

describe('PublicHallComponent', () => {
  let component: PublicHallComponent;
  let fixture: ComponentFixture<PublicHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
