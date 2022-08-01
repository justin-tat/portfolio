import { Component, OnInit, Input } from '@angular/core';


import {Project_Experience_Info} from '../../../interfaces/project-experience-info-template'; 

@Component({
  selector: 'app-project-experience-card',
  templateUrl: './project-experience-card.component.html',
  styleUrls: ['./project-experience-card.component.scss'],
  // animations: [
  //   trigger('expand_gif', [
  //     state('')
  //   ])
  // ]
})
export class ProjectExperienceCardComponent implements OnInit {

  @Input() title: string;
  @Input() imageUrl: string[][];
  @Input() description: string;
  @Input() linkToGithub: string;
  @Input() technologies: string[][];
  @Input() index: number;
  @Input() heights: Object[];
  url_shown:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  //toggle_expanded_image(url: string, index: number): void {
  toggle_expanded_image(url: string): void {
    this.url_shown = url;
  }

  gotoLink(url: string): void {
    window.open(url, "_blank");
  }

}
