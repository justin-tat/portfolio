import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-icon',
  templateUrl: './header-icon.component.html',
  styleUrls: ['./header-icon.component.scss']
})
export class HeaderIconComponent implements OnInit {
  @Input() iconUrl: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }
  goToLink(url: string) {
    let mailText = "mailto:jtat5912@gmail.com";
    if(url == "/assets/icons/gmail-icon.png")  {
      window.location.href = mailText;
    }
    else {
      window.open(url, "_blank");
    }
  }

}
