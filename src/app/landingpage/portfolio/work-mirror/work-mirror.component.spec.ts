import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMirrorComponent } from './work-mirror.component';

describe('WorkMirrorComponent', () => {
  let component: WorkMirrorComponent;
  let fixture: ComponentFixture<WorkMirrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkMirrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
