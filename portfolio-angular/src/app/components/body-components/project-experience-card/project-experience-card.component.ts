import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, animate, style, keyframes } from '@angular/animations';

import {Project_Experience_Info} from '../../../interfaces/project-experience-info-template'; 

@Component({
  selector: 'app-project-experience-card',
  templateUrl: './project-experience-card.component.html',
  styleUrls: ['./project-experience-card.component.scss'],
  animations: [
    trigger('expand_gif', [
      transition('void <=> *', [
        //Applied at beginning
        style( {opacity: 0, height: 0, width: 0} ),
        //Specifies how long it takes to apply given styles
        animate(500)
      ]),
    ]),
    trigger('wiggle_button', [
      transition('true <=> false', [
        animate(750, keyframes([
          style({ transform: 'rotate(5deg)'}),
          style({ transform: 'rotate(-5deg)'}),
          style({ transform: 'rotate(5deg)'}),
          style({ transform: 'rotate(-5deg)'}),
          style({ transform: 'rotate(5deg)'}),
          style({ transform: 'rotate(-5deg)'}),
          style({ transform: 'rotate(5deg)'}),
          style({ transform: 'rotate(0)'})
        ]))
      ])
    ])
  ]
})
export class ProjectExperienceCardComponent implements OnInit {

  @Input() title: string;
  @Input() imageUrl: string[][];
  @Input() description: string;
  @Input() linkToGithub: string;
  @Input() technologies: string[][];
  @Input() index: number;
  @Input() container_height: number;
  @Input() container_width: number;
  @Input() windowHeight: number;
  url_shown:string = '';
  revert_image:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  getExpandedHeight(): number {
    return this.container_height / this.windowHeight * 100
  }

  getBigger(url: string): any {
      var img = document.getElementById(url);
      var aspectRatio = img === null ? 0 : img.clientWidth/img.clientHeight
      var width = {'width.%': 100, 'height': 'auto'};
      var height = {'height.%': 100, 'width': 'auto'};
      return aspectRatio > 1 ? width : height;
  }

  //toggle_expanded_image(url: string, index: number): void {
  toggle_expanded_image(url: string): void {
    this.revert_image = url === '' ? false : true;
    this.url_shown = url;

  }

  gotoLink(url: string): void {
    window.open(url, "_blank");
  }

}
