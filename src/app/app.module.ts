import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentAreaComponent,
    FooterComponent,
    SkillsComponent,
    ExperiencesComponent,
    ProjectsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'education',
        component: EducationComponent
      },

      {
        path: 'projects',
        component: ProjectsComponent
      },

      {
        path: 'experiences',
        component: ExperiencesComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: '',
        component: ContentAreaComponent
      }

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
