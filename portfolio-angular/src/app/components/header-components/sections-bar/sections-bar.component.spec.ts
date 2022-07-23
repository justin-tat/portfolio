import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsBarComponent } from './sections-bar.component';

describe('SectionsBarComponent', () => {
  let component: SectionsBarComponent;
  let fixture: ComponentFixture<SectionsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
