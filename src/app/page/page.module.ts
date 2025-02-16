import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { PageComponent } from './page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { FooterComponent } from '../footer/footer.component';
import { JobsComponent } from '../jobs/jobs.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent
  }
]

@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    FooterComponent,
    JobsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule
  ]
})
export class PageModule { }
