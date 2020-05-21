import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyActComponent } from './add-daily-act.component';

describe('AddDailyActComponent', () => {
  let component: AddDailyActComponent;
  let fixture: ComponentFixture<AddDailyActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
