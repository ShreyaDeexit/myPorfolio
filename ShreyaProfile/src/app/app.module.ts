import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './app/components/introduction/introduction.component';
import { HeaderComponent } from './app/components/header/header.component';
import { ProjectListComponent } from './app/components/project-list/project-list.component';
import { ContactPageComponent } from './app/components/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    HeaderComponent,
    ProjectListComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
