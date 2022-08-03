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
  widths: number[] = [1, 1, 1];
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  windowHeight: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.getDimensions();
    })
  }

  ngAfterContentInit(): void {
    this.getDimensions();
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }


  getDimensions() {
    var elements = Array.from(document.getElementsByClassName('experience-images') as HTMLCollectionOf<HTMLElement>);
    this.windowHeight = window.innerHeight;
    var updatedHeights = [];
    var updatedWidths = [];
    for(let index:number = 0; index < elements.length; index++){
      //Maybe change to clientWidth to get it without margin and padding
      updatedHeights.push(elements[index].clientHeight);
      updatedWidths.push(elements[index].clientWidth);
      // updatedHeights.push(elements[index].offsetHeight);
      // updatedWidths.push(elements[index].offsetWidth);
    }
    this.heights = ([] as number[]).concat(updatedHeights);
    this.widths = ([] as number[]).concat(updatedWidths);
  }

  

}
