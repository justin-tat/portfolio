import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-components/header/header.component';
import { SectionsBarComponent } from './components/header-components/sections-bar/sections-bar.component';
import { ContactBarComponent } from './components/header-components/contact-bar/contact-bar.component';
import { HeaderIconComponent } from './components/header-components/header-icon/header-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionsBarComponent,
    ContactBarComponent,
    HeaderIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
