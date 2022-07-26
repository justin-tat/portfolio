import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExperienceComponent } from './project-experience.component';

describe('ProjectExperienceComponent', () => {
  let component: ProjectExperienceComponent;
  let fixture: ComponentFixture<ProjectExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
