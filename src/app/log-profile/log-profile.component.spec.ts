import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogProfileComponent } from './log-profile.component';

describe('LogProfileComponent', () => {
  let component: LogProfileComponent;
  let fixture: ComponentFixture<LogProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
