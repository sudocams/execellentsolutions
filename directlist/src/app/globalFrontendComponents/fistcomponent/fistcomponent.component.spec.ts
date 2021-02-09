import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FistcomponentComponent } from './fistcomponent.component';

describe('FistcomponentComponent', () => {
  let component: FistcomponentComponent;
  let fixture: ComponentFixture<FistcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FistcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
