import { Component, OnInit, Input, OnDestroy, AfterContentInit } from '@angular/core';
import { trigger, state, transition, animate, style, keyframes } from '@angular/animations';
import { fromEvent, Observable, Subscription } from "rxjs";
import {tap, throttleTime} from 'rxjs/operators';

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
    ]),
    trigger('button_onscreen', [
      transition('false => true', [
        animate(1500, keyframes([
          style({ transform: 'rotate(10deg)'}),
          style({ transform: 'rotate(-10deg)'}),
          style({ transform: 'rotate(10deg)'}),
          style({ transform: 'rotate(-10deg)'}),
          style({ transform: 'rotate(10deg)'}),
          style({ transform: 'rotate(-10deg)'}),
          style({ transform: 'rotate(10deg)'}),
          style({ transform: 'rotate(0)'})
        ]))
      ])
    ])
  ]
})
export class ProjectExperienceCardComponent implements OnInit, AfterContentInit, OnDestroy {

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
  wiggle_observable$: Observable<Event>;
  wiggle_subscription$: Subscription;
  in_upper_portion:boolean = false;


  constructor() { }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.wiggle_observable$ = fromEvent(window, 'scroll');
    this.wiggle_subscription$ = this.wiggle_observable$.subscribe( evt => {
      this.is_on_screen();
    })
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

  //Checks if the revert_image button is 3/4 of the way down the viewport on scroll. Shakes the div when this is true.
  is_on_screen():void {
    var button = Array.from(document.getElementsByClassName(this.linkToGithub) as HTMLCollectionOf<HTMLElement>);
    let view_height = window.innerHeight;
    let height:DOMRect = button[0].getBoundingClientRect();
    try {
      console.log('height.bottom: ' + height.bottom);
      console.log('view_height: ' + view_height);
      //Can't be above the viewport and must be in the upper 3/4 of the viewport
      if (height.bottom < view_height && height.bottom > 0) {
        this.in_upper_portion = true;
      } else {
        this.in_upper_portion = false;
      }
    } catch (e) {
      console.log("Failed to access the button component most likely: " + e);
    } 
  }

  gotoLink(url: string): void {
    window.open(url, "_blank");
  }

  ngOnDestroy() {
    this.wiggle_subscription$.unsubscribe()
  }

}
