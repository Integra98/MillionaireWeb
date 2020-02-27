import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipHallComponent } from './vip-hall.component';

describe('VipHallComponent', () => {
  let component: VipHallComponent;
  let fixture: ComponentFixture<VipHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
