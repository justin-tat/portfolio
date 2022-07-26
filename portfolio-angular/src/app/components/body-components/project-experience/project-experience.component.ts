import { Component, OnInit } from '@angular/core';
import {Project_Experience_Info} from '../../../interfaces/project-experience-info-template'; 
import {EXPERIENCE_LINKS} from '../project-experience-info';

@Component({
  selector: 'app-project-experience',
  templateUrl: './project-experience.component.html',
  styleUrls: ['./project-experience.component.scss']
})
export class ProjectExperienceComponent implements OnInit {

  projects : Project_Experience_Info[] = EXPERIENCE_LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
