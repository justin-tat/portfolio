import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-components/header/header.component';
import { ContactBarComponent } from './components/header-components/contact-bar/contact-bar.component';
import { HeaderIconComponent } from './components/header-components/header-icon/header-icon.component';
import { HeaderButtonComponent } from './components/header-components/header-button/header-button.component';
import { TitleCardComponent } from './components/body-components/title-card/title-card.component';
import { TitleScreenComponent } from './components/body-components/title-screen/title-screen.component';
import { AboutComponent } from './components/body-components/about/about.component';
import { ProjectExperienceComponent } from './components/body-components/project-experience/project-experience.component';
import { ProjectExperienceCardComponent } from './components/body-components/project-experience-card/project-experience-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactBarComponent,
    HeaderIconComponent,
    HeaderButtonComponent,
    TitleCardComponent,
    TitleScreenComponent,
    AboutComponent,
    ProjectExperienceComponent,
    ProjectExperienceCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
