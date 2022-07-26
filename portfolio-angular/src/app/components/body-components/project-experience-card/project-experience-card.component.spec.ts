import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExperienceCardComponent } from './project-experience-card.component';

describe('ProjectExperienceCardComponent', () => {
  let component: ProjectExperienceCardComponent;
  let fixture: ComponentFixture<ProjectExperienceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectExperienceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
