import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPostComponent } from './assign-post.component';

describe('AssignPostComponent', () => {
  let component: AssignPostComponent;
  let fixture: ComponentFixture<AssignPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
