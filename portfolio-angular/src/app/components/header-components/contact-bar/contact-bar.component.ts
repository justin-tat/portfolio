import { Component, OnInit } from '@angular/core';
import { ICON_LINKS } from '../icon-links';
import { Contact_Info } from '../../../interfaces/contact-info'; 

@Component({
  selector: 'app-contact-bar',
  templateUrl: './contact-bar.component.html',
  styleUrls: ['./contact-bar.component.scss']
})
export class ContactBarComponent implements OnInit {

  icons: Contact_Info[] = ICON_LINKS;
  constructor() { }

  ngOnInit(): void {
  }

}
