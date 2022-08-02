import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";
import {Project_Experience_Info} from '../../../interfaces/project-experience-info-template'; 
import {EXPERIENCE_LINKS} from '../../../../data/project-experience-info';

@Component({
  selector: 'app-project-experience',
  templateUrl: './project-experience.component.html',
  styleUrls: ['./project-experience.component.scss']
})
export class ProjectExperienceComponent implements OnInit, AfterContentInit, OnDestroy {

  projects : Project_Experience_Info[] = EXPERIENCE_LINKS;
  heights: number[] = [1, 1, 1];
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  windowHeight: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.getDimensions();
      // console.log("Viewport Width: " + window.innerWidth);
      // console.log("Viewport Height: " + window.innerHeight);
    })
  }

  ngAfterContentInit(): void {
    this.getDimensions();
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

  //Heights not getting updated when getDimensions is called
  getDimensions() {
    var elements = Array.from(document.getElementsByClassName('experience-images') as HTMLCollectionOf<HTMLElement>);
    // this.windowDimensions = {
    //   'width': window.innerWidth,
    //   'height': window.innerHeight
    // };
    this.windowHeight = window.innerHeight;
    var updatedHeights = [];
    for(let index:number = 0; index < elements.length; index++){
      //this.heights[index] = elements[index].offsetHeight;
      updatedHeights.push(elements[index].offsetHeight);
    }
    this.heights = ([] as number[]).concat(updatedHeights);
    //console.log(this.heights);
  }

}
