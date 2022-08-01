import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";
import {Project_Experience_Info} from '../../../interfaces/project-experience-info-template'; 
import {EXPERIENCE_LINKS} from '../../../../data/project-experience-info';

@Component({
  selector: 'app-project-experience',
  templateUrl: './project-experience.component.html',
  styleUrls: ['./project-experience.component.scss']
})
export class ProjectExperienceComponent implements OnInit, AfterViewInit, OnDestroy {

  projects : Project_Experience_Info[] = EXPERIENCE_LINKS;
  heights: Object[] = [{}, {}, {}];
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  constructor() { }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.getDimensions();
      // console.log("Viewport Width: " + window.innerWidth);
      // console.log("Viewport Height: " + window.innerHeight);
    })
  }

  ngAfterViewInit(): void {
    this.getDimensions();
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

  getDimensions() {
    var elements = Array.from(document.getElementsByClassName('experience-images') as HTMLCollectionOf<HTMLElement>);
    //console.log(elements);
    for(let index:number = 0; index < elements.length; index++){
      //console.log(elements[index]);
      this.heights[index] = {
        'width': elements[index].offsetWidth,
        'height': elements[index].offsetHeight
      };
    }
    console.log(this.heights);
  }

}
