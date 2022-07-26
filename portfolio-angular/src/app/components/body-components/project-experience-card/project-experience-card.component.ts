import { Component, OnInit, Input } from '@angular/core';

import {Project_Experience_Info} from '../../../interfaces/project-experience-info-template'; 

@Component({
  selector: 'app-project-experience-card',
  templateUrl: './project-experience-card.component.html',
  styleUrls: ['./project-experience-card.component.scss']
})
export class ProjectExperienceCardComponent implements OnInit {

  @Input() title: string;
  @Input() imageUrl: string;
  @Input() description: string;
  @Input() linkToGithub: string;

  constructor() { }

  ngOnInit(): void {
  }

}
